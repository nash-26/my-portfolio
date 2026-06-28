"use client";
import { useState } from 'react';
import {Button} from "@/components/interactive";
import {WorkContent} from "@/components/WorkContent";
import {EduContent} from "@/components/EduContent";


export function ExpTabs() {
  const [tab, setTab] = useState(true);

  function workClick() {
    setTab(true);
  }

  function eduClick() {
    setTab(false);
  }

  return (
    <>
    <div
      style={{ backgroundColor: "hsl(var(--bg-light))" }}
      className="flex rounded-md mt-4 items-start"
    >
      <Button
        onClick={workClick}
        className={`w-1/2 px-4 m-2 rounded-md transition-colors duration-200 ease-in-out hover:bg-[hsl(var(--bg))]
          ${tab
            ? "bg-[hsl(var(--bg))]"
            : "bg-[hsl(var(--bg-light))]"
          }`}
      >
        Work
      </Button>

      <Button
        onClick={eduClick}
        className={`w-1/2 px-4 m-2 rounded-md transition-colors duration-200 ease-in-out hover:bg-[hsl(var(--bg))]
          ${!tab
            ? "bg-[hsl(var(--bg))]"
            : "bg-[hsl(var(--bg-light))]"
          }`}
      >
        Education
      </Button>
    </div>
    <div className='mt-4 mb-4 pl-6 pb-2 pr-6 border-2 border-[hsl(var(--bg-light))] rounded-md'>
        {tab ? <WorkContent /> : <EduContent/>}
    </div>
    </>
  );
}