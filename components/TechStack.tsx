import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiNextdotjs, SiCplusplus, SiArduino, SiAutodesk, SiCisco, SiMysql } from 'react-icons/si';

export function TechStack() {

  const iconClass = "transition-transform duration-200 hover:scale-120 cursor-pointer";

  return (
    <div className="flex flex-wrap gap-6 p-4 border-2 border-[hsl(var(--bg-light))] rounded-md m-2">
      <FaReact size={40} className={`text-blue-400 ${iconClass}`} />
      <SiNextdotjs size={40} className={`text-black dark:text-white ${iconClass}`} />
      <SiCplusplus size={40} className={`text-blue-600 ${iconClass}`} />
      <SiArduino size={40} className={`text-teal-600 ${iconClass}`} />
      <SiAutodesk size={40} className={`text-red-600 ${iconClass}`} />
      <SiCisco size={40} className={`text-blue-500 ${iconClass}`} />
      <FaJava size={40} className={`text-orange-600 ${iconClass}`} />
      <SiMysql size={40} className={`text-blue-800 ${iconClass}`} />
      <FaHtml5 size={40} className={`text-orange-500 ${iconClass}`} />
      <FaCss3Alt size={40} className={`text-blue-500 ${iconClass}`} />
      <FaJsSquare size={40} className={`text-yellow-400 ${iconClass}`} />
    </div>
  );
}