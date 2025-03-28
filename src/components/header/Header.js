import { t } from "@lingui/core/macro";
import React, { useContext } from "react";
import Headroom from "react-headroom";
import StyleContext from "../../contexts/StyleContext";
import {
  usePortfolio
} from "../../portfolio";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.scss";

function Header() {
  const { greeting,
    workExperiences,
    skillsSection,
    openSource,
    blogSection,
    talkSection,
    achievementSection,
    resumeSection
  } = usePortfolio();
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;


  return (
    <Headroom>
      <header className={isDark ? "dark-menu header noselect" : "header noselect"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">{t`Skills`}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience"> {t`Work Experiences`}</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">{t`Open Source`}</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#certifications">{t`Achievements`}</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">{t`Blogs`}</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">{t`Talks`}</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">{t`Resume`}</a>
            </li>
          )}
          <li>
            <a href="#contact">{t`Contact Me`}</a>
          </li>
          <li>
            <div>
              <ToggleSwitch />
            </div>
          </li>
          <li>
            <div>
              <LanguageSwitch />
            </div>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
