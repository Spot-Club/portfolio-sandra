import React from "react";
import EducationCard from "../../components/educationCard/EducationCard";
import { usePortfolio } from "../../portfolio";
import "./Education.scss";

export default function Education() {
  const { educationInfo } = usePortfolio();

  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
