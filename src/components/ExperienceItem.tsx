import React from "react";

interface ExperienceItemProps {
  startDate: string;
  endDate: string;
  position: string;
  company: string;
  right?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  startDate,
  endDate,
  position,
  company,
  right,
}) => (
  <div className={`experienceItem${right ? " right" : " left"}`}>
    <p>
      {startDate} / {endDate}
    </p>
    <h4>{position}</h4>
    <h5>{company}</h5>
  </div>
);

export default ExperienceItem;
