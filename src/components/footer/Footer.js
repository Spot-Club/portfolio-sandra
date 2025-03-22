import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import { useLingui } from "@lingui/react/macro";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const { t } = useLingui();
  
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji(t`Made with ❤️ by DeveloperFolio Team | Adapted by Your Next Product Owner `)}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {t`Theme by`}{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            developerFolio
          </a>
        </p>
      </div>
    </Fade>
  );
}
