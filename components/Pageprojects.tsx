import {ProjectList} from "@/components/ProjectList";

export function Projectspage(){
    return(
        <section className="min-h-screen scroll-mt-16 " id="projects">
          <h2 className="pl-4 text-2xl">My School Projects</h2>
          <div className="m-6">
            <ProjectList/>
          </div>
        </section>
    );
}