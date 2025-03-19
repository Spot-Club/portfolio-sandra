import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { usePortfolio } from "../portfolio";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Education from "./education/Education";
import Greeting from "./greeting/Greeting";
import "./Main.scss";
import Podcast from "./podcast/Podcast";
import Profile from "./profile/Profile";
import Projects from "./projects/Projects";
import StackProgress from "./skillProgress/skillProgress";
import Skills from "./skills/Skills";
import SplashScreen from "./splashScreen/SplashScreen";
import StartupProject from "./StartupProjects/StartupProject";
import Talks from "./talks/Talks";
import { Top } from "./topbutton/Top";
import WorkExperience from "./workExperience/WorkExperience";

const Main = ({ language, setLanguage }) => {
  const { splashScreen } = usePortfolio();
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, [splashScreen.duration, splashScreen.enabled]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  }

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme, language: language, changeLanguage: changeLanguage }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting language={language}/>
            <Skills />
            <StackProgress />
            <Education />
            <WorkExperience />
            <Projects />
            <StartupProject />
            <Achievement />
            <Blogs />
            <Talks />
            <Podcast />
            <Profile />
            <Footer />
            <Top />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
