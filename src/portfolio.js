/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file


import { useLingui } from "@lingui/react/macro";
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import FeryaEventDecor from "./containers/ferya/FeryaEventDecor";
import Genetec from "./containers/genetec/Genetec";
import Recursyve from "./containers/recursyve/Recursyve";
import TheLink from "./containers/theLink/TheLink";

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/sandra-benamara/",
  gmail: "sandra.benamara@hec.ca",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

const usePortfolio = () => {
  const { t } = useLingui();

  // Splash Screen
  const splashScreen = {
    enabled: true, // set false to disable splash screen
    animation: splashAnimation,
    duration: 2000 // Set animation duration as per your animation
  };

  // Summary And Greeting Section

  const illustration = {
    animated: true // Set to false to use static SVG
  };

  const greeting = {
    username: "Sandra Benamara",
    title: t`Hi there! I'm Sandra`,
    subTitle: emoji(
      t`A Product Owner with a developer background, I bring a unique blend of technical expertise and user-centric vision to every project. Passionate about transforming bold ideas into impactful digital experiences, I thrive on bridging the gap between technology and business goals. Let’s shape the future, one user story at a time. 🚀`
    ),
    resumeLink:
      // "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
      "https://1drv.ms/b/c/a3b928ba9b1c0551/EWuw6IP2hlFHtgteNJ0rnQcBRJLzE5-ZJIzVXeybt--t6A?e=d1Hecs", // Set to empty to hide the button
    displayGreeting: true // Set false to hide this section, defaults to true
  };



  // Skills Section

  const skillsSection = {
    title: t`What I do`,
    subTitle: t`Passionate about continuous learning and growth as a Product Owner, with a strong focus on motivating teams and delivering impactful, innovative solutions.`,
    skills: [
      // emoji(
      //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
      // ),
      // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
      // emoji(
      //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
      // ),
      emoji(t`⚡ Transform complex business requirements into clear user stories and actionable tasks`),
      emoji(t`⚡ Prioritize and manage product backlogs to deliver maximum value with each sprint`),
      emoji(t`⚡ Bridge the gap between technical teams and stakeholders with clear communication and a developer background`)
    ],


    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
      // {
      //   skillName: "docker",
      //   fontAwesomeClassname: "fab fa-docker"
      // }
    ],
    display: true // Set false to hide this section, defaults to true
  };

  // Education Section

  const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [
      {
        schoolName: t`HEC Montreal`,
        logo: require("./assets/images/hec.png"),
        subHeader: t`D.E.S.S. in Management`,
        duration: t`September 2021 - April 2023`,
        desc: t`Acquired advanced skills in strategic management, leadership, and business decision-making, with a focus on driving innovation and operational efficiency in dynamic environments.`,
        descBullets: [
          t`Developed expertise in project management, Agile methodologies, and cross-functional team leadership.`,
          t`Applied theoretical knowledge to real-world business challenges through case studies and collaborative projects.`
        ]
      },
      {
        schoolName: t`Polytechnique Montreal`,
        logo: require("./assets/images/polymtl.png"),
        subHeader: t`Bachelor of Engineering in Software Engineering`,
        duration: t`September 2017 - August 2021`,
        desc: t`Acquired a solid foundation in software development, system design, and problem-solving, with a focus on building scalable and secure applications.`,
        descBullets: [
          t`Gained hands-on experience in software engineering principles, including object-oriented programming, algorithms, and database management.`,
          t`Developed practical skills in web development, operating systems, and software security through coursework and team projects.`
        ]
      },
      {
        schoolName: t`University of Montreal`,
        logo: require("./assets/images/udemLogo.webp"),
        subHeader: t`Bachelor of Biomedical Sciences`,
        duration: t`September 2014 - April 2017`,
        desc: t`Developed analytical and problem-solving skills through the study of complex biological systems and research projects.`,
        descBullets: [
          t`Gained expertise in analyzing complex systems, translating to breaking down intricate product challenges and identifying root causes.`,
          t`Conducted research requiring critical thinking, hypothesis testing, and data interpretation, fostering a structured problem-solving approach.`
        ]
      }
    ]
  };

  // Your top 3 proficient stacks/tech experience

  const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
      {
        Stack: t`Agile & Scrum Methodologies`, //Insert stack or technology you have experience in
        progressPercentage: "98%" //Insert relative proficiency in percentage
      },
      {
        Stack: t`Product Roadmapping & Strategy`,
        progressPercentage: "80%"
      },
      {
        Stack: t`Stakeholder Communication & Collaboration`,
        progressPercentage: "85%"
      }
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
  };

  // Work experience section

  const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
      {
        role: t`Project Manager`,
        company: t`Recursyve Solutions`,
        companylogo: require("./assets/images/recursyveLogo.jpeg"),
        date: t`September 2021 – February 2022`,
        desc: t`Recursyve is a dynamic software development company specializing in innovative, scalable, and user-centric solutions. I optimized processes, translated client needs into tasks, and ensured seamless project execution.`,
        descBullets: [
          t`Led client meetings to define and refine application requirements.`,
          t`Translated customer needs into Stories and sub-tasks within the Backlog.`,
          t`Automated workflows in Jira to streamline processes across teams.`,
          t`Optimized development processes through creation and improvement initiatives.`,
          t`Monitored project progression and applied corrective measures as needed.`
        ],
        footerLink: [
          {
            isHyperlink: false,
            name: t`More`,
            component: <Recursyve />
          }
          //  you can add extra buttons here.
        ]
      },
      {
        role: t`Java Backend Developer`,
        company: "Revelate",
        companylogo: require("./assets/images/revelate.png"),
        date: t`March 2022 – November 2022`,
        desc: t`Revelate is a data integration platform that simplifies data sharing and monetization for businesses. I contributed to building scalable ETL solutions and enhancing notification services using Spring Boot.`,
        descBullets: [
          t`Contributed to the development of a generic data transformation solution (ETL).`,
          t`Facilitated email customization through an API as part of a custom notification service powered by Spring Boot.`,
          t`Developed and executed unit tests to ensure the proper functioning of all features.`
        ]
      },
      {
        role: t`C# Developer`,
        company: "Genetec",
        companylogo: require("./assets/images/genetec.png"),
        date: t`January 2023 – August 2024`,
        desc: t`Genetec is a global leader in security solutions, providing innovative technologies for video surveillance, access control, and analytics. I contributed to enhancing development processes, building microservices, and designing user interfaces.`,
        descBullets: [
          t`Enhanced meeting efficiency by implementing structured agendas and time management techniques.`,
          t`Facilitated the transition from a Kanban to Shape Up development process, streamlining workflows and increasing productivity.`,
          t`Organized and led team-building events to foster collaboration and improve team dynamics.`,
          t`Developed microservices using C# and ASP.NET.`,
          t`Managed NoSQL databases such as MongoDB and ElasticSearch.`,
          t`Designed user interfaces with ReactJS, TypeScript, and MaterialUI.`,
          t`Implemented asynchronous communication with an event-driven system.`
        ],
        footerLink: [
          {
            isHyperlink: false,
            name: t`More`,
            component: <Genetec />
          }
          //  you can add extra buttons here.
        ]
      }
    ]
  };

  /* Your Open Source Section to View Your Github Pinned Projects
  To know how to get github key look at readme.md */

  const openSource = {
    showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
    display: false // Set false to hide this section, defaults to true
  };

  const bigProjects = {
    title: t`Projects`,
    subtitle: t`INNOVATIVE INITIATIVES I'VE SHAPED FROM CONCEPT TO EXECUTION`,
    projects: [
      {
        image: require("./assets/images/ferya.jpg"),
        projectName: t`Ferya Event Decor & Design`,
        role: t`Co-Founder & Product Manager`,
        date: t`September 2024 – Ongoing`,
        projectDesc: t`Co-founded and developed a unique event decoration brand, defining its identity, business strategy, and client-focused solutions. Managed the product side, including service design, pricing strategies, and customer experience optimization.`,
        footerLink: [
          {
            isHyperlink: true,
            name: t`Visit Instagram`,
            url: "https://www.instagram.com/ferya.eventdecor?igsh=YTRvdDlpY2hocXM5"
          },
          {
            isHyperlink: false,
            name: t`More`,
            component: <FeryaEventDecor />
          }
          //  you can add extra buttons here.
        ]
      },
      {
        image: require("./assets/images/theLink.jpeg"),
        projectName: t`The Link`,
        role: t`Product Manager`,
        date: t`February 2025 – Ongoing`,
        projectDesc:t`"Contributed to an innovative stealth project aimed at transforming entrepreneurship through a scalable, user-centric platform. Managed the product side, including feature prioritization, user research, and roadmap development to align with business goals.`,
        footerLink: [
          {
            isHyperlink: true,
            name: t`Visit Website`,
            url: "https://the-link.ca/"
          },
          {
            isHyperlink: false,
            name: t`More`,
            component: <TheLink />
          }
        ]
      }
    ],
    display: true // Set false to hide this section, defaults to true
  };


  // Achievement Section
  // Include certificates, talks etc

  const achievementSection = {
    title: emoji(t`Certifications 🏆 `),
    subtitle:
      t`Validating my expertise and commitment to continuous learning`,

    achievementsCards: [
      {
        title: t`Certified Scrum Product Owner® `,
        subtitle: t`Completed Certifcation from Scrum Alliance for CSPO`,
        image: require("./assets/images/cspo.webp"),
        imageAlt: "PWA Logo",
        footerLink: [
          { name: t`Certification`, url: "" },
          // {
          //   name: "Final Project",
          //   url: "https://pakistan-olx-1.firebaseapp.com/"
          // }
        ]
      },
      {
        title: t`Project Management Professional (PMP)®`,
        subtitle: t`Ongoing Certifcation from Project Management Institute for PMP`,
        image: require("./assets/images/pmp.png"),
        imageAlt: "PWA Logo",
        footerLink: [
          { name: t`Certification`, url: "" },
          // {
          //   name: "Final Project",
          //   url: "https://pakistan-olx-1.firebaseapp.com/"
          // }
        ]
      },
    ],
    display: true // Set false to hide this section, defaults to true
  };

  // Blogs Section

  const blogSection = {
    title: t`Blogs`,
    subtitle:
      t`With Love for Developing cool stuff, I love to write and teach others what I have learnt.`,
    displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [
      {
        url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
        title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
        description:
          "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
      },
      {
        url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
        title: "Why REACT is The Best?",
        description:
          "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
      }
    ],
    display: false // Set false to hide this section, defaults to true
  };

  // Talks Sections

  const talkSection = {
    title: "TALKS",
    subtitle: emoji(
      "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [
      {
        title: "Build Actions For Google Assistant",
        subtitle: "Codelab at GDG DevFest Karachi 2019",
        slides_url: "https://bit.ly/saadpasta-slides",
        event_url: "https://www.facebook.com/events/2339906106275053/"
      }
    ],
    display: false // Set false to hide this section, defaults to true
  };

  // Podcast Section

  const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
      "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: false // Set false to hide this section, defaults to true
  };

  // Resume Section
  const resumeSection = {
    title: t`Resume`,
    subtitle: t`Feel free to download my resume`,

    // Please Provide with Your Podcast embeded Link
    display: true // Set false to hide this section, defaults to true
  };

  const contactInfo = {
    title: emoji(t`Contact Me ☎️`),
    subtitle:
      t`Looking to hire or discuss a project? Let's connect and explore how I can add value to your team or initiative!`,
    email_address: "sandra.benamara@hec.ca"
  };

  // Twitter Section

  const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: false // Set true to display this section, defaults to false
  };

  const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

  return {
    achievementSection, blogSection, bigProjects, contactInfo, educationInfo, greeting, illustration, isHireable, openSource, podcastSection, resumeSection, skillsSection,
    splashScreen, talkSection, techStack, twitterDetails, workExperiences
  }
}

export { socialMediaLinks, usePortfolio };

