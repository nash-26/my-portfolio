import Image from "next/image";
import { project } from "@/data/project";

// Main List Container Component
export function ProjectList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 cursor-pointer">
      {project.map((item, index) => (
        <ProjectCard key={index} item={item} />
      ))}
    </div>
  );
}

function ProjectCard({ item }: { item: (typeof project)[number] }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        {item.image?.[0] ? (
          <Image
            src={item.image[0]}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-neutral-400">
            No Image Available
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <h3 className="mb-2 text-xl font-bold text-neutral-800 dark:text-neutral-100">
          {item.title}
        </h3>

        {/* Tech Stack Tags */}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {item.techstack.map((tech, index) => (
            <span
              key={index}
              className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

