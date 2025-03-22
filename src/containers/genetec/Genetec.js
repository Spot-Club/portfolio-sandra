import React from "react";
import { ListTabContent, ModalContent, TextTabContent, TimelineTabContent } from "../../components/modalContent/ModalContent";
import "./Genetec.scss";
import { t } from "@lingui/core/macro";

const Genetec = () => {
    const contentTabs = [
        { title: t`Project Overview`, content: <TextTabContent content={[t`ClearID by Genetec is an advanced identity and access management solution designed to streamline and secure operations for organizations. As part of the Genetec ecosystem, ClearID focuses on providing a robust platform that simplifies identity verification, enhances security, and integrates seamlessly with existing systems. The project aims to deliver a reliable, scalable, and user-friendly solution that meets the evolving needs of modern security operations.`]} /> },
        { title: t`My Contributions`, content: <TextTabContent content={[t`As a C# Developer on the ClearID team, I contributed to the development and enhancement of the platform’s core functionalities. My responsibilities included designing and implementing backend systems, integrating secure protocols, and optimizing performance to deliver a seamless user experience. I collaborated closely with cross-functional teams, including UI/UX designers, security experts, and QA engineers, to transform complex requirements into efficient and scalable code. Additionally, I played a role in troubleshooting, performance optimization, and ensuring the platform met the highest standards of security and reliability.`]} /> },
        { title: t`My Experience`, content: <TimelineTabContent position={t`C# Developer`} date={t`January 2023 — August 2024`} description={[t`Working on ClearID has been both challenging and rewarding. One of the main challenges was developing a secure and scalable identity management system capable of handling diverse organizational needs while maintaining high performance. Balancing the technical complexity of security protocols with user-friendly functionality required innovative problem-solving and close collaboration with the team.`, t`Another challenge was adapting to the fast-paced environment of a large-scale project, where priorities and requirements often evolved rapidly. This demanded flexibility, quick decision-making, and a focus on delivering high-quality results under tight deadlines. Despite these hurdles, the experience has been incredibly enriching. I’ve deepened my expertise in secure software development, learned to navigate complex technical and organizational challenges, and contributed to building a product that enhances security operations for organizations worldwide.`]} /> },
        {
            title: t`Objectives`,
            content:
                <ListTabContent
                    description={[t`My primary objectives for ClearID were to deliver a secure, scalable, and user-friendly identity management platform that meets the evolving needs of organizations. I aimed to ensure the platform’s reliability, performance, and compliance with industry standards while driving continuous improvement.`]}
                    items={[{
                        title: t`Collaborate Effectively`,
                        descriptions: [t`Work closely with cross-functional teams to align technical solutions with business goals.`],
                    }, {
                        title: t`Enhance User Experience`,
                        descriptions: [t`Focus on intuitive design and functionality to ensure the platform is easy to use and meets user needs.`],
                    }, {
                        title: t`Deliver a Secure Solution`,
                        descriptions: [t`Develop a platform that prioritizes security and compliance with industry standards.`],
                    }, {
                        title: t`Ensure Scalability`,
                        descriptions: [t`Build a system capable of handling growing user demands and organizational complexity.`],
                    }, {
                        title: t`Optimize Performance`,
                        descriptions: [t`Create a high-performance application that delivers a seamless user experience.`],
                    }]} />
        },
        {
            title: t`My approach`, content:
                <ListTabContent
                    description={[t`My approach is rooted in collaboration and precision. I believe in working closely with teams to understand requirements, solve problems, and deliver solutions that align with both technical and business objectives. By embracing agile methodologies and a user-first mindset, I ensure the platform is both secure and intuitive.`]}
                    items={[{
                        title: t`User-First Mindset`,
                        descriptions: [t`Prioritize user needs to create an intuitive and efficient platform.`],
                    }, {
                        title: t`Agile Development`,
                        descriptions: [t`Use agile practices to break down tasks, deliver incremental improvements, and adapt quickly to changing requirements.`],
                    }, {
                        title: t`Security-Focused Design`,
                        descriptions: [t`Embed security best practices into every aspect of development to ensure a robust and reliable platform.`],
                    }, {
                        title: t`Team Collaboration`,
                        descriptions: [t`Foster open communication and teamwork to address challenges, share knowledge, and achieve shared goals.`],
                    }, {
                        title: t`Continuous Learning`,
                        descriptions: [t`Stay updated on industry trends and technologies to drive innovation.`],
                    }]} />
        },
    ];
    return (
        <ModalContent title="Genetec" contentTabs={contentTabs} />
    );
}

export default Genetec;

