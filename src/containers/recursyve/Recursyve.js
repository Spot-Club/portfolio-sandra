import React from "react";
import { ListTabContent, ModalContent, TextTabContent, TimelineTabContent } from "../../components/modalContent/ModalContent";
import "./Recursyve.scss";
import { t } from "@lingui/core/macro";

const Recursyve = () => {
    const contentTabs = [
        { title: t`Project Overview`, content: <TextTabContent content={[t`Ruse is an innovative AI-powered platform designed to address a critical gap in the poker community. While existing poker analysis tools provided data, they often failed to deliver real value to players. These tools lacked personalization, offered overly complex strategies, and provided little to no actionable feedback. Ruse aimed to change that by offering personalized, easy-to-understand insights and real-time feedback to help players improve their game.`]} /> },
        { title: t`My Contributions`, content: <TextTabContent content={[t`As the Project Manager, I excelled in planning, execution, and team leadership. I defined clear objectives, created detailed roadmaps, and managed cross-functional teams to deliver results. By fostering collaboration and facilitating agile practices like stand-ups and retrospectives, I ensured seamless progress. I acted as the bridge between stakeholders and the team, translating business needs into actionable tasks like epics and user stories. Proactively identifying risks and implementing solutions, I kept projects on track. My focus on quality assurance and user feedback ensured the final product met high standards of functionality and usability.`]} /> },
        { title: t`My Experience`, content: <TimelineTabContent position={t`Project Manager`} date={t`September 2021 — December 2021`} description={[t`As the Project Manager for Ruse, I was responsible for turning a bold vision into reality. My role required me to wear multiple hats, from strategist to problem-solver, while keeping the team motivated and focused.`, t`One of the biggest challenges was addressing the core problem with existing poker tools: they provided data but failed to deliver actionable, personalized insights. Players often found the strategies too complex and the feedback too generic. Ruse aimed to solve this by leveraging AI algorithms to analyze gameplay and provide tailored recommendations that were easy to understand and implement.`, t`To ensure success, I had to deeply understand the AI algorithm to effectively communicate its requirements to developers through user stories and epics. I also determined the development sequence, ensuring alignment with the roadmap. Balancing the needs of stakeholders—from founders eager for quick results to developers needing time to perfect the technology—was another key aspect of my role.`, t`By maintaining clear communication and setting realistic expectations, I kept everyone aligned and focused on the end goal. One of the most rewarding moments was successfully delivering the project within tight deadlines, enabling the founders to apply for grants and accelerate their startup. Knowing that our work made a real difference in the founders' journey was incredibly fulfilling.`, t`In the end, my role was about more than delivering a product—it was about fostering collaboration, solving problems, and creating something that truly resonated with users. This experience reinforced the importance of adaptability, clear communication, and a user-first mindset in driving successful projects.`]} /> },
        {
            title: t`Objectives`,
            content:
                <ListTabContent
                    description={[t`The primary goal of Ruse was to revolutionize the way poker players analyze and improve their gameplay. Unlike existing tools that offered generic data and overly complex strategies, Ruse aimed to provide personalized, actionable insights that were easy to understand and implement. The objectives were.`]}
                    items={[{
                        title: t`Enhance User Value`,
                        descriptions: [t`Deliver a platform that truly helps players improve their skills and performance.`],
                    }, {
                        title: t`Simplify Complexity`,
                        descriptions: [t`Make advanced poker strategies accessible to players of all levels.`],
                    }, {
                        title: t`Provide Real-Time Feedback`,
                        descriptions: [t`Offer immediate, actionable recommendations during gameplay.`],
                    }, {
                        title: t`Ensure User-Centric Design`,
                        descriptions: [t`Create an intuitive and engaging experience tailored to poker players' needs.`],
                    }]} />
        },
        {
            title: t`My approach`, content:
                <ListTabContent
                description={[t`As the Project Manager, I adopted a user-first, agile approach to ensure the project’s success.`]}
                items={[{
                        title: t`Collaborative Planning`,
                        descriptions: [t`Worked closely with stakeholders to define clear objectives and deliverables, ensuring alignment with business goals and user needs.`],
                    }, {
                        title: t`Iterative Development`,
                        descriptions: [t`Broke down the project into sprints, enabling continuous feedback and improvement throughout the development process.`],
                    }, {
                        title: t`Cross-Functional Teamwork`,
                        descriptions: [t`Fostered collaboration between developers, designers, and the product owner to align on priorities and ensure seamless execution.`],
                    }, {
                        title: t`Risk Management`,
                        descriptions: [t`Proactively identified and mitigated risks to keep the project on track and within scope.`],
                    }, {
                        title: t`User Feedback Integration`,
                        descriptions: [t`Regularly tested the platform with QA to refine features and ensure usability.`, t`Conducted demos with clients to gather their feedback, making adjustments as needed to meet their expectations.`],
                    }]} />
        },
        {
            title: t`Features`, content:
                <ListTabContent
                    description={[t`Ruse was designed to address the shortcomings of existing poker tools by offering the following key features`]}
                    items={[{
                        title: t`Personalized Insights`,
                        descriptions: [t`AI-powered analysis tailored to each player’s style and skill level.`],
                    }, {
                        title: t`Real-Time Feedback`,
                        descriptions: [t`Instant recommendations during gameplay to help players make better decisions`],
                    }, {
                        title: t`Simplified Strategies`,
                        descriptions: [t`Easy-to-understand tips and strategies, avoiding unnecessary complexity.`],
                    }, {
                        title: t`Interactive Interface`,
                        descriptions: [t`A clean, intuitive design that made it easy for players to navigate and use the platform.`],
                    }, {
                        title: t`Progress Tracking`,
                        descriptions: [t`Tools to help players monitor their improvement over time.`],
                    }]} />
        },
    ];
    return (
        <ModalContent title="Ruse" contentTabs={contentTabs} />
    );
}

export default Recursyve;

