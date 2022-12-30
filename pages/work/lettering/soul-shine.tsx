import React from "react";
import Image from "../../../src/components/Image";
import WorkLayout from "../../../src/components/WorkLayout";

const soulShine: React.FC = () => (
  <WorkLayout
    print
    name="Soul Shine"
    personal
    date="2020"
    tools="Procreate"
    relatedLinks={["stay-weird", "luck", "hello-world"]}
  >
    <div className="item big square">
      <Image
        prefix="../"
        folder="works/soul-shine/"
        source="soul-shine"
        title="Do what makes your soul shine"
      />
    </div>
    <p className="quote">- Mamma Mia</p>
  </WorkLayout>
);

export default soulShine;
