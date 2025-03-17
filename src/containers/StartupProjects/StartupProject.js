import React, { useContext, useState } from "react";
import { Fade } from "react-reveal";
import { Modal } from "../../components/modal/modal";
import StyleContext from "../../contexts/StyleContext";
import { usePortfolio } from "../../portfolio";
import "./StartupProjects.scss";

export default function StartupProject() {
  const { bigProjects } = usePortfolio();
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
                    <h5
                      className={
                        isDark
                          ? "project-text-role dark-mode-text"
                          : "project-text-role"
                      }
                    >
                      {project.role}
                    </h5>
                    <h5
                      className={
                        isDark
                          ? "project-text-date dark-mode-text"
                          : "project-text-date"
                      }
                    >
                      {project.date}
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
