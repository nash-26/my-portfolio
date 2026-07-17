"use client";

import { useState, memo } from "react";
import Image from "next/image";
import { project } from "@/data/project";

// Explicitly define what a Project Item looks like
interface ProjectItem {
  title: string;
  techstack: string[];
  image?: string[];
  description?: string;
}

// Helper function to extract YouTube ID
function getYouTubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

export function ProjectList() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {project.map((item, index) => (
          <ProjectCard 
            key={index} 
            item={item as ProjectItem} 
            onClick={() => setActiveProject(item as ProjectItem)} 
          />
        ))}
      </div>

      {activeProject && (
        <ProjectModal 
          item={activeProject} 
          onClose={() => setActiveProject(null)} 
        />
      )}
    </>
  );
}

interface ProjectCardProps {
  item: ProjectItem;
  onClick: () => void;
}

// Optimized with memo to prevent main grid layout calculations during modal use
const ProjectCard = memo(function ProjectCard({ item, onClick }: ProjectCardProps) {
  const firstPreviewImage = item.image?.find(
    (media) => !media.includes("youtube.com") && !media.includes("youtu.be")
  );

  return (
    <div 
      onClick={onClick} 
      className="flex flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-sm transition hover:shadow-md cursor-pointer"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-800">
        {firstPreviewImage ? (
          <Image
            src={firstPreviewImage}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-neutral-400 bg-neutral-950 text-center p-4">
            Video Demo Available
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-xl font-bold text-neutral-100">
          {item.title}
        </h3>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {item.techstack.map((tech, index) => (
            <span
              key={index}
              className="rounded-md bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

interface ProjectModalProps {
  item: ProjectItem;
  onClose: () => void;
}

function ProjectModal({ item, onClose }: ProjectModalProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  
  const mediaList = item.image || [];
  const hasMultipleMedia = mediaList.length > 1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMediaIndex((prev) => (prev === 0 ? mediaList.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMediaIndex((prev) => (prev === mediaList.length - 1 ? 0 : prev + 1));
  };

  const currentMedia = mediaList[currentMediaIndex];
  const youtubeId = currentMedia ? getYouTubeId(currentMedia) : null;
  const isLocalVideo = currentMedia?.match(/\.(mp4|webm|ogg)$/i) || currentMedia?.includes("video");

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-7xl h-[85vh] md:h-[80vh] rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800/90 text-neutral-300 hover:bg-neutral-700 font-bold transition-colors shadow-sm"
        >
          ✕
        </button>

        {/* CHANGED FROM GRID TO FLEXBOX: Prevents mobile height collapse */}
        <div className="flex flex-col md:flex-row h-full w-full overflow-hidden">
          
          {/* LEFT SIDE: Media Player (Now reliably takes 45% of height on mobile) */}
          <div className="relative w-full h-[45%] md:h-full md:w-1/2 bg-neutral-950 flex items-center justify-center border-b md:border-b-0 md:border-r border-neutral-800 overflow-hidden shrink-0">
            {currentMedia ? (
              youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                  title={`${item.title} video demo`}
                  className="w-full h-full aspect-video md:h-full md:w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : isLocalVideo ? (
                <video src={currentMedia} controls className="w-full h-full object-contain" />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={currentMedia}
                    alt={`${item.title} media ${currentMediaIndex + 1}`}
                    fill
                    className="object-contain p-3 md:p-6" 
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )
            ) : (
              <div className="text-sm text-neutral-500">No Media Available</div>
            )}

            {hasMultipleMedia && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 focus:outline-none shadow-md z-10 text-xs md:text-base"
                >
                  ❮
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 focus:outline-none shadow-md z-10 text-xs md:text-base"
                >
                  ❯
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm z-10">
                  {mediaList.map((_, i) => (
                    <span 
                      key={i} 
                      className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full transition-colors ${i === currentMediaIndex ? "bg-white" : "bg-white/40"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* RIGHT SIDE: Content Info (Now takes the remaining 55% of height on mobile) */}
          <div className="flex flex-col p-5 md:p-10 h-[55%] md:h-full md:w-1/2 bg-neutral-900 overflow-hidden">
            
            {/* FIXED TITLE CONTAINER */}
            <div className="shrink-0 pb-3 md:pb-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-100 pr-8 tracking-tight">
                {item.title}
              </h2>
            </div>

            {/* SCROLLABLE DESCRIPTION CONTAINER */}
            <div 
              className="flex-1 overflow-y-auto pr-2 pb-4 min-h-0
                         [&::-webkit-scrollbar]:w-1.5
                         [&::-webkit-scrollbar-track]:bg-transparent
                         [&::-webkit-scrollbar-track]:border-none
                         [&::-webkit-scrollbar-thumb]:rounded-full
                         [&::-webkit-scrollbar-thumb]:bg-neutral-700
                         hover:[&::-webkit-scrollbar-thumb]:bg-neutral-600"
              style={{ 
                overscrollBehavior: 'contain', 
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'thin',
                scrollbarColor: '#404040 transparent'
              }}
            >
              <p className="text-neutral-400 leading-relaxed text-sm md:text-lg whitespace-pre-line">
                {item.description || "Detailed overview write-up for this project phase."}
              </p>
            </div>

            {/* FIXED TECH STACK CONTAINER */}
            <div className="border-t border-neutral-800 pt-4 md:pt-5 mt-auto shrink-0">
              <h4 className="text-[10px] md:text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 md:mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5 md:gap-2.5">
                {item.techstack.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-md bg-neutral-800 px-2.5 py-1 md:px-3.5 md:py-1.5 text-xs md:text-sm font-medium text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}