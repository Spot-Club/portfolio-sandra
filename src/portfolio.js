/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  title: "Hi there! I'm Sandra",
  subTitle: emoji(
    "A Product Owner with a developer background, I bring a unique blend of technical expertise and user-centric vision to every project. Passionate about transforming bold ideas into impactful digital experiences, I thrive on bridging the gap between technology and business goals. Let’s shape the future, one user story at a time. 🚀"
  ),
  resumeLink:
    // "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
    "https://1drv.ms/b/c/a3b928ba9b1c0551/EWuw6IP2hlFHtgteNJ0rnQcBRJLzE5-ZJIzVXeybt--t6A?e=d1Hecs", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

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

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate about continuous learning and growth as a Product Owner, with a strong focus on motivating teams and delivering impactful, innovative solutions.",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // ),
    emoji("⚡ Transform complex business requirements into clear user stories and actionable tasks"),
    emoji("⚡ Prioritize and manage product backlogs to deliver maximum value with each sprint"),
    emoji("⚡ Bridge the gap between technical teams and stakeholders with clear communication and a developer background")
  ],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // // {
    // //   skillName: "html-5",
    // //   fontAwesomeClassname: "fab fa-html5"
    // // },
    // // {
    // //   skillName: "css3",
    // //   fontAwesomeClassname: "fab fa-css3-alt"
    // // },
    // // {
    // //   skillName: "Angular",
    // //   fontAwesomeClassname: "fab fa-angular"
    // // },
    // // {
    // //   skillName: "reactjs",
    // //   fontAwesomeClassname: "fab fa-react"
    // // },
    // {
    //   skillName: "react",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // // {
    // //   skillName: "typescript",
    // //   fontAwesomeClassname: "fab fa-react"
    // // },

    // {
    //   skillName: "c#",
    //   fontAwesomeClassname: "fab fa-csharp"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    // // {
    // //   skillName: "JavaScript",
    // //   fontAwesomeClassname: "fab fa-js"
    // // },

    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // // {
    // //   skillName: "swift",
    // //   fontAwesomeClassname: "fab fa-swift"
    // // },
    // // {
    // //   skillName: "npm",
    // //   fontAwesomeClassname: "fab fa-npm"
    // // },
    // {
    //   skillName: "sql and no-sql database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // // {
    // //   skillName: "firebase",
    // //   fontAwesomeClassname: "fas fa-fire"
    // // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "java",
    //   fontAwesomeClassname: "fab fa-java"
    // },
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
      schoolName: "HEC Montreal",
      logo: require("./assets/images/hec.png"),
      subHeader: "D.E.S.S. in Management",
      duration: "September 2021 - April 2023",
      desc: "Acquired advanced skills in strategic management, leadership, and business decision-making, with a focus on driving innovation and operational efficiency in dynamic environments.",
      descBullets: [
        "Developed expertise in project management, Agile methodologies, and cross-functional team leadership.",
        "Applied theoretical knowledge to real-world business challenges through case studies and collaborative projects."
      ]
    },
    {
      schoolName: "Polytechnique Montreal",
      logo: require("./assets/images/polymtl.png"),
      subHeader: "Bachelor of Engineering in Software Engineering",
      duration: "September 2017 - August 2021",
      desc: "Acquired a solid foundation in software development, system design, and problem-solving, with a focus on building scalable and secure applications.",
      descBullets: [
        "Gained hands-on experience in software engineering principles, including object-oriented programming, algorithms, and database management.",
        "Developed practical skills in web development, operating systems, and software security through coursework and team projects."
      ]
    },
    {
      schoolName: "University of Montreal",
      logo: require("./assets/images/udemLogo.webp"), 
      subHeader: "Bachelor of Biomedical Sciences",
      duration: "September 2014 - April 2017", 
      desc: "Developed strong analytical, problem-solving, and research skills through a multidisciplinary program focused on human biology and health sciences. These skills are highly transferable to product management, particularly in understanding complex systems, data-driven decision-making, and user-centric solutions.",
      descBullets: [
          "Gained expertise in analyzing complex biological systems, a skill that translates to breaking down intricate product challenges and identifying root causes.",
          "Conducted research projects requiring critical thinking, hypothesis testing, and data interpretation, fostering a structured approach to problem-solving.",
          "Collaborated in multidisciplinary teams, enhancing communication and teamwork skills essential for cross-functional collaboration in product development.",
          "Developed a user-centric mindset by studying human biology, which aligns with creating products that address real user needs and pain points."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    // {
    //   Stack: "Frontend/Design", //Insert stack or technology you have experience in
    //   progressPercentage: "90%" //Insert relative proficiency in percentage
    // },
    // {
    //   Stack: "Backend",
    //   progressPercentage: "70%"
    // },
    // {
    //   Stack: "Programming",
    //   progressPercentage: "60%"
    // }
    {
      Stack: "Agile & Scrum Methodologies", //Insert stack or technology you have experience in
      progressPercentage: "98%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Product Roadmapping & Strategy",
      progressPercentage: "80%"
    },
    {
      Stack: "Stakeholder Communication & Collaboration",
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
      role: "Project Manager",
      company: "Recursyve Solutions",
      companylogo: require("./assets/images/recursyveLogo.jpeg"),
      date: "September 2021 – February 2022",
      desc: "Recursyve is a dynamic software development company specializing in innovative, scalable, and user-centric solutions. I optimized processes, translated client needs into tasks, and ensured seamless project execution.",
      descBullets: [
        "Led client meetings to define and refine application requirements.",
        "Translated customer needs into Stories and sub-tasks within the Backlog.",
        "Automated workflows in Jira to streamline processes across teams.",
        "Optimized development processes through creation and improvement initiatives.",
        "Monitored project progression and applied corrective measures as needed."
      ]
    },
    {
      role: "Java Backend Developer",
      company: "Revelate",
      companylogo: require("./assets/images/revelate.png"),
      date: "March 2022 – November 2022",
      desc: "Revelate is a data integration platform that simplifies data sharing and monetization for businesses. I contributed to building scalable ETL solutions and enhancing notification services using Spring Boot.",
      descBullets: [
        "Contributed to the development of a generic data transformation solution (ETL).",
        "Facilitated email customization through an API as part of a custom notification service powered by Spring Boot.",
        "Developed and executed unit tests to ensure the proper functioning of all features."
      ]
    },
    {
      role: "C# Developer",
      company: "Genetec",
      companylogo: require("./assets/images/genetec.png"),
      date: "January 2023 – August 2024",
      desc: "Genetec is a global leader in security solutions, providing innovative technologies for video surveillance, access control, and analytics. I contributed to enhancing development processes, building microservices, and designing user interfaces.",
      descBullets: [
        "Enhanced meeting efficiency by implementing structured agendas and time management techniques.",
        "Facilitated the transition from a Kanban to Shape Up development process, streamlining workflows and increasing productivity.",
        "Organized and led team-building events to foster collaboration and improve team dynamics.",
        "Developed microservices using C# and ASP.NET.",
        "Managed NoSQL databases such as MongoDB and ElasticSearch.",
        "Designed user interfaces with ReactJS, TypeScript, and MaterialUI.",
        "Implemented asynchronous communication with an event-driven system."
      ],
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Validating my expertise and commitment to continuous learning",

  achievementsCards: [
    {
      title: "Certified Scrum Product Owner® ",
      subtitle: "Completed Certifcation from Scrum Alliance for CSPO",
      image: require("./assets/images/cspo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};
// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       imageAlt: "Google Code-In Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       imageAlt: "PWA Logo",
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Looking to hire or discuss a project? Let's connect and explore how I can add value to your team or initiative!",
  number: "+1 (514) 962-9841",
  email_address: "sandra.benamara@hec.ca"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  achievementSection, blogSection, contactInfo, educationInfo, greeting, illustration, isHireable, openSource, podcastSection, resumeSection, skillsSection, socialMediaLinks,
  splashScreen, talkSection, techStack, twitterDetails, workExperiences
};

