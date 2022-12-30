import React from "react";
import Image from "../../../src/components/Image";
import WorkLayout from "../../../src/components/WorkLayout";

const timing: React.FC = () => (
  <WorkLayout
    print
    name="Timing"
    personal
    date="2020"
    tools="Procreate"
    relatedLinks={["saint", "luck", "hello-world"]}
  >
    <div className="item big square">
      <Image
        prefix="../"
        folder="works/timing/"
        source="timing"
        title="Timing is a Bitch"
      />
    </div>
    <p className="quote">
      If you have chemistry you only need one other thing... Timing... But
      timing is a bitch.
      <br />- How I Met Your Mother
    </p>
  </WorkLayout>
);

export default timing;
