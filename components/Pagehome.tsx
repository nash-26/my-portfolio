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
              <SocialLinks/>
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

