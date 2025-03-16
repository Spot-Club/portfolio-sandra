import React, { useContext, useState } from "react";
import { Fade } from "react-reveal";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { Modal } from "../../components/modal/modal";
import StyleContext from "../../contexts/StyleContext";
import { workExperiences } from "../../portfolio";
import "./WorkExperience.scss";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);
  const [showModal, setshowModal] = useState(false);
  const [modalContent, setmodalContent] = useState();

  function changeModalContent(component) {
    if (!component) {
      return;
    }
    setmodalContent(component);
    setshowModal(true);
  }
  if (workExperiences.display) {
    return (<>
      <Modal visible={showModal} onClose={() => setshowModal(false)}>
        {modalContent}
      </Modal>
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                        footerLink: card.footerLink,
                        onFooterLinkClick: changeModalContent,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
    );
  }
  return null;
}
