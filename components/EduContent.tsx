import { eduExperience } from "@/data/education";

export function EduContent() {
  return (
    <div className="divide-y-2 divide-[hsl(var(--bg-light))]">
      {eduExperience.map((education) => (
        <div className="mt-4" key={education.school}>
          <h3>{education.school}</h3>
          <p>
            &emsp;{education.degree} <br />
            &emsp;{education.period}
          </p>

          
        </div>
      ))}
    </div>
  );
}