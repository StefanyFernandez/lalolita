import React from "react";
import Image from "../../../src/components/Image";
import WorkLayout from "../../../src/components/WorkLayout";
import { lalalandImages } from "../../../src/utils/worksList";

const lalaland: React.FC = () => (
  <WorkLayout
    name="Lalaland"
    workPlace="Binpar"
    role="UI/UX + Front End Design"
    date="2020"
    client="IE University"
    industry="Education"
    relatedLinks={["cervantes", "dr-q"]}
    description={
      <>
        <p>
          This landing was created for IE University’s economics and politics
          faculty.
        </p>
        <p>
          The mission was to get more engagement and interest from the students
          in the case studies, since their content was quite dense, we looked
          for a way to make it more visual.
        </p>
        <p>
          This particular case study was based on the creation of a
          constitutional law reform in a fictitious country called “Lalaland”,
          divided into 6 chapters, each of which ended with a short quiz, the
          results of which could be downloaded, and successively be discussed in
          class.
        </p>
        <p>
          We’ve created a pretty modern and eye-catching brand identity for the
          country, the navigation had parallax effect, we’ve used animations of
          the shapes as the user scrolled down, and a scroll lock when the user
          reached the end of a chapter to ensure the fulfillment of each quiz.
        </p>
        <p>
          And of course, the web was fully responsive on desktop, tablet and
          mobile, it also was tested on the most common browsers.
        </p>
      </>
    }
    tools="Sketch - React"
  >
    {lalalandImages.map((i) => (
      <div key={i.name} className={`item${i.size ? " " + i.size : ""}`}>
        <Image
          prefix="../"
          folder="works/lalaland/"
          source={i.name}
          title={i.title}
        />
      </div>
    ))}
  </WorkLayout>
);

export default lalaland;
