import Image from "next/image";
import {Header} from "@/components/Header";
import {Main} from "@/components/Main";
import {Stage} from "@/components/Stage";
import {Homepage} from "@/components/Pagehome"
import {Projectspage} from "@/components/Pageprojects";
import {Contactpage} from "@/components/Pagecontact";

export default function Home() {
  return (
    <Stage>
      <Header />
      <Main>
        <Homepage />
        <Projectspage />
        <Contactpage />
      </Main>
    </Stage>
  );
}