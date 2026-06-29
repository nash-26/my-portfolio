// 1. Add the new imports to your Font Awesome line
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiNextdotjs, SiCplusplus, SiArduino, SiAutodesk, SiCisco, SiMysql } from 'react-icons/si';

export function TechStack() {
  return (
    <div className="flex flex-wrap gap-6 p-4 border-2 border-[hsl(var(--bg-light))] rounded-md m-2">
      <FaReact size={40} className="text-blue-400" />
      <SiNextdotjs size={40} className="text-black dark:text-white" />
      <SiCplusplus size={40} className="text-blue-600" />
      <SiArduino size={40} className="text-teal-600" />
      <SiAutodesk size={40} className="text-red-600" />
      <SiCisco size={40} className="text-blue-500" />
      <FaJava size={40} className="text-orange-600" />
      <SiMysql size={40} className="text-blue-800" />
      <FaHtml5 size={40} className="text-orange-500" />
      <FaCss3Alt size={40} className="text-blue-500" />
      <FaJsSquare size={40} className="text-yellow-400" />
    </div>
  );
}