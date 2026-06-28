import { workExperience } from "@/data/work";

export function WorkContent() {
  return (
    <div className="divide-y-2 divide-[hsl(var(--bg-light))]">
      {workExperience.map((job) => (
        <div className="mt-4" key={job.company}>
          <h3>{job.company}</h3>
          <p>   
            &emsp;{job.role} <br/>
            &emsp;{job.period}
          </p>
          
        </div>
      ))}
    </div>
  );
}