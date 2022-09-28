import Image from "next/image";
import Link from "next/link";
import React from "react";
import btc from "../public/assets/projects/btcmeetups.png";
import tomin from "../public/assets/projects/tomin.png";
import sapa from "../public/assets/projects/sapa.webp";
import q from "../public/assets/projects/quotes.png";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="BTC Meetups"
            backgroundImg={btc}
            projectUrl="/btc"
          />
          <ProjectItem
            title="Tomin"
            backgroundImg={tomin}
            projectUrl="/tomin"
          />
          <ProjectItem
            title="Quotes"
            backgroundImg={q}
            projectUrl="/q"
          />
          <ProjectItem
            title="Zelena šapa"
            backgroundImg={sapa}
            projectUrl="/sapa"
          />
        </div>
      </div>
    </div>
  );
}
