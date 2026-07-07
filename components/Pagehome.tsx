import Image from 'next/image';
import { ExpTabs } from "@/components/Exptabs";
import {SocialLinks} from "@/components/Socials";
import {TechStack} from './TechStack';


export function Homepage(){
    return(
        <section className=" min-h-screen scroll-mt-16 pt-2 pl-4 pr-4 mb-10" id="home">
          <div className="flex flex-row items-end mb-10">
            <div>
              <h2 className="text-3xl">Hi, I'm Jonas 👋</h2>
              <p>22 year old computer engineer from the Philippines</p>
              <p>"A blend of wit, wisdom, and tech-focused motivation."</p>
              <div className='flex gap-2'>
                <SocialLinks/>
              <a className='flex w-fit p-2 gap-3 border-2 border-[hsl(var(--bg-light))] rounded-md transition-transform duration-300 ease-in-out hover:bg-[hsl(var(--bg-light))]'
                href="/resume/Resume_Angeles_Jonas.pdf"
                download
              >
                Download CV
              </a>
              </div>
            </div>
            <div className="grow flex justify-center items-center ">
              <Image
                src="/profile_1.jpg"
                alt="my profile"
                width={150}
                height={0}
                className="h-auto object-contain rounded-md transition-transform duration-300 ease-in-out hover:scale-110"
                />
            </div>
          </div>
          <ExpTabs/>
          <p>Tech Stack I have knowledge of:</p>
          <TechStack/>
        </section>
    );
} 

