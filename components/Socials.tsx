import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/nash-26",
    icon: FaGithub,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/jonastumbaga.angeles",
    icon: FaFacebook,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/jonas-angeles-6844ab395",
    icon: FaLinkedin,
  },
];


export function SocialLinks() {
  return (
    <div className="flex w-fit p-2 gap-3 border-2 border-[hsl(var(--bg-light))] rounded-md">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            aria-label={`Visit my ${social.name} profile`}
          >
            <Icon className="text-2xl" />
          </a>
        );
      })}
    </div>
  );
}
