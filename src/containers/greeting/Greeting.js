import React, { useContext } from "react";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";
import landingPerson from "../../assets/lottie/landingPerson";
import Button from "../../components/button/Button";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import StyleContext from "../../contexts/StyleContext";
import { usePortfolio } from "../../portfolio";
import { useLingui } from "@lingui/react/macro";
import "./Greeting.scss";

export default function Greeting(language) {
  const { greeting, illustration } = usePortfolio();
  const { isDark } = useContext(StyleContext);
  const { t } = useLingui();
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text={t`Contact me`} href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={language === "fr"?require( "./cv.pdf"):require("./resume.pdf")}
                    download={t`Resume.pdf`}
                    className="download-link-button"
                  >
                    <Button text={t`Download my resume`} />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
