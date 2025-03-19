import React from "react";
import { ListTabContent, ModalContent, RoadmapTabContent, TextTabContent, TimelineTabContent } from "../../components/modalContent/ModalContent";
import "./FeryaEventDecor.scss";
import { t } from "@lingui/core/macro";

const FeryaEventDecor = () => {
    const contentTabs = [
        { title: t`Project Overview`, content: <TextTabContent content={[t`Ferya Event Decor & Design is a creative venture specializing in custom event decoration and design for special occasions. From weddings and corporate events to private parties, we transform spaces into unforgettable experiences. Our mission is to blend creativity, elegance, and functionality to bring our clients' visions to life.`]} /> },
        { title: t`My Contributions`, content: <TextTabContent content={[t`As a Co-Founder, I played a pivotal role in shaping Ferya Event Decor & Design. I defined the brand identity, values, and unique selling proposition, ensuring we stood out in a competitive market. I developed the business plan, pricing models, and target market strategies to drive growth. By building strong client relationships, I delivered customized solutions that surpassed expectations. I oversaw logistics, vendor partnerships, and team coordination to ensure seamless execution. Additionally, I researched and planned marketing campaigns, managed social media, and worked to build a strong online presence to attract clients in the future.`]} /> },
        { title: t`My Experience`, content: <TimelineTabContent position={t`Co-Founder & Product Owner`} date={t`September 2024 — Ongoing`} description={[t`Launching Ferya Event Decor & Design is both exhilarating and challenging. One of the most significant challenges is establishing credibility in a highly competitive market. We consistently prove our value and creativity to differentiate ourselves. Another ongoing challenge is managing limited resources, especially in the early stages, from navigating budget constraints to building a reliable network of suppliers and vendors.`, t`Balancing creativity with practicality remains a key focus. While we aim to deliver stunning designs, we also ensure they are feasible within clients' budgets and timelines.`, t`Despite these challenges, seeing our clients' reactions to our work and building a reputation for excellence make every hurdle worthwhile. This experience continues to teach me the importance of resilience, adaptability, and client-centric thinking in growing a successful business.`]} /> },
        {
            title: t`Objectives`,
            content:
                <ListTabContent
                    description={[t`My primary objectives are to build a strong foundation for Ferya Event Decor & Design, ensuring its growth and sustainability in a competitive market. I aim to create a brand that stands out for its creativity, reliability, and ability to deliver unforgettable experiences. By focusing on innovation, client satisfaction, and strategic partnerships, I strive to position the company as a leader in the event decoration industry while fostering long-term success and continuous improvement.`]}
                    items={[{
                        title: t`Establish a Unique Brand`,
                        descriptions: [t`Create a recognizable and trusted brand in the event decoration industry.`],
                    }, {
                        title: t`Deliver Exceptional Experiences`,
                        descriptions: [t`Provide clients with personalized, high-quality designs that exceed their expectations.`],
                    }, {
                        title: t`Build a Strong Network`,
                        descriptions: [t`Develop relationships with reliable vendors, suppliers, and industry partners.`],
                    }, {
                        title: t`Grow the Business`,
                        descriptions: [t`Expand our client base and service offerings while maintaining profitability.`],
                    }, {
                        title: t`Innovate Continuously`,
                        descriptions: [t`Stay ahead of trends and incorporate new ideas to keep our designs fresh and relevant.`],
                    }]} />
        },
        {
            title: t`My approach`, content:
                <ListTabContent
                    description={[t`My approach is rooted in creativity, collaboration, and a commitment to excellence. I believe in putting clients at the heart of every project, ensuring their vision is brought to life with precision and passion. By fostering teamwork, embracing adaptability, and maintaining a relentless focus on quality, I strive to deliver exceptional results that leave a lasting impression.`]}
                    items={[{
                        title: t`Client-Centric Focus`,
                        descriptions: [t`Prioritized understanding clients' visions and translating them into stunning designs.`],
                    }, {
                        title: t`Collaborative Planning`,
                        descriptions: [t`Worked closely with the team and clients to ensure every detail was perfect.`],
                    }, {
                        title: t`Agile Problem-Solving`,
                        descriptions: [t`Adapted quickly to challenges, from last-minute changes to logistical hurdles.`],
                    }, {
                        title: t`Quality Over Quantity`,
                        descriptions: [t`Focused on delivering exceptional quality, even if it meant taking on fewer projects initially.`],
                    }, {
                        title: t`Continuous Learning`,
                        descriptions: [t`Stayed updated on industry trends and incorporated feedback to improve our services.`],
                    }]} />
        },
        {
            title: t`Roadmap`,
            content:
                <RoadmapTabContent
                    description={[t`Our journey at Ferya Event Decor & Design is a blend of strategic milestones and ambitious future plans. Below, you'll find a snapshot of what we've accomplished so far and where we're headed next, as we continue to innovate and deliver exceptional experiences for our clients.`]}
                    doneItems={[
                        {
                            title: t`Market Research`,
                            descriptions: [t`Analysis of event decoration trends.`, t`Identification of client needs and expectations.`, t`Competitive analysis to identify opportunities.`]
                        }, {
                            title: t`Pricing Study`,
                            descriptions: [t`Definition of a competitive pricing strategy.`, t`Cost and margin analysis for each service and product.`]
                        }, {
                            title: t`Marketing and Branding Strategy`,
                            descriptions: [t`Definition of the visual identity and core values of the brand.`, t`Planning of photo sessions to create an attractive portfolio.`, t`Selection of a photo style that reflects Ferya's elegance and creativity.`]
                        }, {
                            title: t`Supplier Research`,
                            descriptions: [t`Identification and selection of reliable suppliers for materials and products.`, t`Negotiation of contracts and supply terms.`]
                        }, {
                            title: t`Product Offering Development`,
                            descriptions: [t`Selection of items to sell (e.g., wedding menus, cake toppers for birthdays, centerpieces, etc.).`, t`Creation of prototypes and testing with a target audience.`]
                        }
                    ]}
                    todoItems={
                        [{
                            title: t`Launch of the Online Platform`,
                            descriptions: [t`Development of a user-friendly and responsive e-commerce website.`, t`Integration of a secure booking and payment system.`]
                        }, {
                            title: t`Launch Campaign`,
                            descriptions: [t`Planning and execution of a digital marketing campaign (social media, targeted ads, etc.).`, t`Collaboration with influencers and partners to increase visibility.`]
                        }, {
                            title: t`Expansion of Offerings`,
                            descriptions: [t`Addition of new products and services based on customer feedback.`, t`Exploration of collaborations with local event planners and vendors.`]
                        }, {
                            title: t`Operations Optimization`,
                            descriptions: [t`Implementation of a stock and order management system.`, t`Automation of administrative processes to improve efficiency.`]
                        }, {
                            title: t`Customer Experience`,
                            descriptions: [t`Creation of customized packages to meet specific client needs.`, t`Implementation of a feedback system to continuously improve services.`]
                        }
                        ]}
                />
        },
    ];
    return (
        <ModalContent title="Ferya Event Decor" contentTabs={contentTabs} />
    );
}

export default FeryaEventDecor;

