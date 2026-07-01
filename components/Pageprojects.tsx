import {ProjectList} from "@/components/ProjectList";

export function Projectspage(){
    return(
        <section className="min-h-screen scroll-mt-16 border-t" id="projects">
          <h2 className="p-4 text-2xl">Projects Content</h2>
          <div className="m-6">
            <ProjectList/>
          </div>
        </section>
    );
}