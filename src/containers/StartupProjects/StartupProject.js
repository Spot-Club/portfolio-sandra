import React, { useContext, useState } from "react";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

import { Modal } from "../../components/modal/modal";
import FeryaEventDecor from "../ferya/FeryaEventDecor";
import "./StartupProjects.scss";

const bigProjects = {
  title: "Projects",
  subtitle: "INNOVATIVE INITIATIVES I'VE SHAPED FROM CONCEPT TO EXECUTION",
  projects: [
    {
      image: require("../../assets/images/ferya.jpg"),
      projectName: "Ferya Event Decor & Design",
      projectDesc: "Co-founded and developed a unique event decoration brand, defining its identity, business strategy, and client-focused solutions. Managed the product side, including service design, pricing strategies, and customer experience optimization.",
      footerLink: [
        {
          isHyperlink: true,
          name: "Visit Instagram",
          url: "https://www.instagram.com/ferya.eventdecor?igsh=YTRvdDlpY2hocXM5"
        },
        {
          isHyperlink: false,
          name: "More",
          component: <FeryaEventDecor />
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("../../assets/images/theLink.jpeg"),
      projectName: "The Link",
      projectDesc: "Contributed to an innovative stealth project aimed at transforming entrepreneurship through a scalable, user-centric platform. Managed the product side, including feature prioritization, user research, and roadmap development to align with business goals.",
      footerLink: [
        {
          isHyperlink: true,
          name: "Visit Website",
          url: "https://the-link.ca/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

export default function StartupProject() {
  const [showModal, setshowModal] = useState(false);
  const [modalContent, setmodalContent] = useState();

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  function changeModalContent(component) {
    if (!component) {
      return;
    }
    setmodalContent(component);
    setshowModal(true);
  }

  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (<>
    <Modal visible={showModal} onClose={() => setshowModal(false)}>
      {modalContent}
    </Modal>
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => link.isHyperlink ? openUrlInNewTab(link.url) : changeModalContent(link.component)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  </>
  );
}
