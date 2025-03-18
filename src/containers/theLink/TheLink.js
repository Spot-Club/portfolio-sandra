import { t } from "@lingui/core/macro";
import React from "react";
import { ListTabContent, ModalContent, RoadmapTabContent, TextTabContent, TimelineTabContent } from "../../components/modalContent/ModalContent";
import "./TheLink.scss";

const TheLink = () => {
    const contentTabs = [
        { title: t`Project Overview`, content: <TextTabContent content={[t`The Link by Evolvia is an innovative stealth project designed to transform the landscape of entrepreneurship. As a startup initiative, it focuses on developing a cutting-edge solution to address a critical gap in the market. While specific details remain confidential at this stage, the project is driven by a vision to create a scalable, user-centric platform that delivers exceptional value and redefines user experiences. The goal is to build a product that not only meets market demands but also sets new benchmarks for innovation and efficiency.`]} /> },
        { title: t`My Contributions`, content: <TextTabContent content={[t`As Product Owner, I drive the vision and execution of The Link by Evolvia. I conducted market research, competitor analysis, and user pain point studies to validate the app’s potential. Using a Business Model Canvas, I defined the business plan and identified key customer personas. I establish the product roadmap, prioritize features, and align stakeholders and teams with business goals. By gathering user feedback and iterating on the product, I ensure it meets user needs and business objectives, fostering innovation and ensuring viability.`]} /> },
        { title: t`My Experience`, content: <TimelineTabContent position={t`Product Owner`} date={t`February 2025 — Ongoing`} description={[t`The initial research phase for The Link by Evolvia has been both exciting and challenging. One of the biggest challenges has been navigating the uncertainties of a stealth project, where limited information can be shared externally. Balancing confidentiality with the need to gather valuable insights and feedback during the research phase required careful planning and creativity. Another significant challenge was identifying and validating the core problem we aim to solve, ensuring our solution is both innovative and viable in a competitive market.`, t`Balancing creativity with practicality remains a key focus. While we aim to deliver stunning designs, we also ensure they are feasible within clients' budgets and timelines.`, t`Additionally, managing limited resources in the early stages—from budget constraints to building a skilled team—has tested my adaptability and strategic thinking. Despite these hurdles, the experience has been incredibly rewarding. I’ve gained valuable knowledge in areas such as grants, making strategic technology choices for both immediate and future development, and laying the groundwork for building a successful product from scratch.`]} /> },
        {
            title: t`bjectives`,
            content:
                <ListTabContent
                    description={[t`My primary objectives for The Link by Evolvia are to establish a strong product-market fit, deliver a solution that exceeds user expectations, and position the product as a leader in its space. I aim to create a scalable and sustainable platform that not only addresses current market needs but also anticipates future trends. By fostering innovation, collaboration, and continuous improvement, I strive to ensure the product’s long-term success and impact.`]}
                    items={[{
                        title: t`Establish a Unique Value Proposition`,
                        descriptions: [t`Define a clear and compelling value proposition that differentiates The Link by Evolvia in the market.`],
                    }, {
                        title: t`Deliver a User-Centric Solution`,
                        descriptions: [t`Develop a platform that prioritizes user needs, ensuring an intuitive and seamless experience.`],
                    }, {
                        title: t`Build a Scalable Product`,
                        descriptions: [t`Create a solution that can grow and adapt to evolving market demands and user expectations.`],
                    }, {
                        title: t`Foster Innovation`,
                        descriptions: [t`Incorporate cutting-edge technologies and creative ideas to keep the product ahead of industry trends.`],
                    }, {
                        title: t`Achieve Market Validation`,
                        descriptions: [t`Validate the product through user testing, feedback, and iterative improvements to ensure it meets real-world needs.`],
                    }]} />
        },
        {
            title: t`My approach`, content:
                <ListTabContent
                    description={[t`My approach is centered on collaboration, agility, and a relentless focus on delivering value. I believe in working closely with stakeholders, developers, and users to ensure the product aligns with both business goals and user expectations. By embracing an iterative process, I aim to adapt quickly to challenges and opportunities, ensuring the product evolves in response to real-world feedback.`]}
                    items={[{
                        title: t`User-First Mindset`,
                        descriptions: [t`Prioritize understanding user needs and pain points to create a solution that truly resonates.`],
                    }, {
                        title: t`Agile Methodology`,
                        descriptions: [t`Leverage agile practices to ensure flexibility, transparency, and continuous improvement throughout the development process.`],
                    }, {
                        title: t`Data-Driven Decisions`,
                        descriptions: [t`Rely on market research, user feedback, and analytics to guide product decisions and prioritization.`],
                    }, {
                        title: t`Collaborative Leadership`,
                        descriptions: [t`Foster a culture of teamwork and open communication to ensure alignment and shared ownership of the product vision.`],
                    }, {
                        title: t`Focus on Quality`,
                        descriptions: [t`Deliver a high-quality product that not only meets but exceeds user expectations.`],
                    }]} />
        },
        {
            title: t`Roadmap`,
            content:
                <RoadmapTabContent
                    description={[t`Our journey with The Link by Evolvia is driven by a commitment to solving real-world problems through innovative solutions. Below, you'll find a summary of the key milestones we've achieved and the exciting steps we're planning to take as we refine our vision and deliver impactful value`]}
                    doneItems={[
                        {
                            title: t`Market and Competitor Research`,
                            descriptions: [t`Conducted in-depth analysis of market trends and competitors to identify opportunities.`]
                        }, {
                            title: t`Business Model Canvas`,
                            descriptions: [t`Defined the business model, value proposition, and revenue streams.`]
                        }, {
                            title: t`Persona Analysis`,
                            descriptions: [t`Identified and analyzed target user personas to better understand their needs and pain points.`]
                        }, {
                            title: t`Problem and Opportunity Identification`,
                            descriptions: [t`Pinpointed key problems and opportunities in the market.`]
                        }, {
                            title: t`Vision and Value Proposition`,
                            descriptions: [t`Established a clear vision and defined the unique value The Link brings to its users.`]
                        }
                    ]}
                    todoItems={
                        [{
                            title: t`User Feedback Form`,
                            descriptions: [t`Develop and deploy a feedback form to gather insights on real user problems and validate our solution.`]
                        }, {
                            title: t`Solution Adaptation`,
                            descriptions: [t`Analyze feedback to adapt and refine our solution to better meet user needs.`]
                        }, {
                            title: t`Prototype Testing`,
                            descriptions: [t`Test the updated solution with a target audience to ensure it effectively addresses identified problems.`]
                        }, {
                            title: t`Partnership Exploration`,
                            descriptions: [t`Explore collaborations with industry partners to enhance the platform's reach and impact.`]
                        }, {
                            title: t`Roadmap Refinement`,
                            descriptions: [t`Continuously refine the product roadmap based on user feedback and market trends.`]
                        }
                        ]}
                />
        },
    ];
    return (
        <ModalContent title="The Link" contentTabs={contentTabs} />
    );
}

export default TheLink;

