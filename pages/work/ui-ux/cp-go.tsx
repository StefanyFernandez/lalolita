import React from "react";
import Image from "../../../src/components/Image";
import WorkLayout from "../../../src/components/WorkLayout";
import { cpGoImages } from "../../../src/utils/worksList";

const cpGo: React.FC = () => (
  <WorkLayout
    name="CP GO"
    workPlace="Binpar"
    role="UI/UX + Front End Design"
    date="2021"
    client="CP Grupo"
    industry="Real State Development"
    relatedLinks={["dr-q", "read-garden"]}
    description={
      <>
        <p>
          This webapp was a game created for CP Grupo, a real state development
          company.
        </p>
        <p>
          The mission was to develop an online community for the owners of the
          homes that the client sells, focused on a fun way to build and
          decorate their homes, create them families, and get to know their
          neighbors while the real house was being builded.
        </p>
        <p>
          We’ve designed all the elements from the logo and graphic line, to the
          game interface, characters and elements of this digital world,
          inspired by games like Minecraft, The Sims and Habbo Hotel.
        </p>
        <p>
          The main challenge was that all the elements of the game interface
          were accessible from mobile devices in landscape, since they were the
          most used by the players.
        </p>
      </>
    }
    tools="Sketch - Magicavoxel - React"
  >
    {cpGoImages.map((i) => (
      <div key={i.name} className={`item${i.size ? " " + i.size : ""}`}>
        <Image
          prefix="../"
          folder="works/cp-go/"
          source={i.name}
          title={i.title}
        />
      </div>
    ))}
  </WorkLayout>
);

export default cpGo;
