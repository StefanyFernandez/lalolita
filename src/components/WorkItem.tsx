import React from "react";
import Link from "next/link";
import { TabsNames, WorkSizes } from "../../src/utils/worksList";
import Image from "./Image";

interface WorkItemProps {
  link: string;
  name: string;
  category: TabsNames;
  image: string;
  size?: WorkSizes;
  project?: string;
  detail?: boolean;
  width?: number;
  height?: number;
}

const WorkItem: React.FC<WorkItemProps> = ({
  link,
  name,
  category,
  image,
  size,
  project,
  detail,
  width,
  height,
}) => (
  <li
    className={`workItem${size ? ` ${size}` : ""}`}
    id={`${category} ${link}`}
  >
    <Link
      title={name}
      href={`/work/${category.toLowerCase().replace(/\s+/g, "")}/${link}`}
    >
      <p className="name">{name}</p>
    </Link>
    <Image
      prefix={`${detail ? "../" : ""}`}
      title={name}
      folder={`works/${project}/`}
      source={image}
      width={width}
      height={height}
      /* format="jpeg" */
    />
  </li>
);

export default WorkItem;
