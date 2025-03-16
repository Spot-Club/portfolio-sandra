import React from "react";
import { ListTabContent, ModalContent, RoadmapTabContent, TextTabContent, TimelineTabContent } from "../../components/modalContent/ModalContent";
import "./FeryaEventDecor.scss";

const FeryaEventDecor = () => {
    const contentTabs = [
        { title: "Project Overview", content: <TextTabContent content={["Ferya Event Decor & Design is a creative venture specializing in custom event decoration and design for special occasions. From weddings and corporate events to private parties, we transform spaces into unforgettable experiences. Our mission is to blend creativity, elegance, and functionality to bring our clients' visions to life."]} /> },
        { title: "My Contributions", content: <TextTabContent content={["As a Co-Founder, I played a pivotal role in shaping Ferya Event Decor & Design. I defined the brand identity, values, and unique selling proposition, ensuring we stood out in a competitive market. I developed the business plan, pricing models, and target market strategies to drive growth. By building strong client relationships, I delivered customized solutions that surpassed expectations. I oversaw logistics, vendor partnerships, and team coordination to ensure seamless execution. Additionally, I researched and planned marketing campaigns, managed social media, and worked to build a strong online presence to attract clients in the future."]} /> },
        { title: "My Experience", content: <TimelineTabContent position={"Co-Founder & Product Owner"} date={"September 2024 — Ongoing"} description={["Launching Ferya Event Decor & Design is both exhilarating and challenging. One of the most significant challenges is establishing credibility in a highly competitive market. We consistently prove our value and creativity to differentiate ourselves. Another ongoing challenge is managing limited resources, especially in the early stages, from navigating budget constraints to building a reliable network of suppliers and vendors.", "Balancing creativity with practicality remains a key focus. While we aim to deliver stunning designs, we also ensure they are feasible within clients' budgets and timelines.", "Despite these challenges, seeing our clients' reactions to our work and building a reputation for excellence make every hurdle worthwhile. This experience continues to teach me the importance of resilience, adaptability, and client-centric thinking in growing a successful business."]} /> },
        {
            title: "Objectives",
            content:
                <ListTabContent
                    description={["My primary objectives are to build a strong foundation for Ferya Event Decor & Design, ensuring its growth and sustainability in a competitive market. I aim to create a brand that stands out for its creativity, reliability, and ability to deliver unforgettable experiences. By focusing on innovation, client satisfaction, and strategic partnerships, I strive to position the company as a leader in the event decoration industry while fostering long-term success and continuous improvement."]}
                    items={[{
                        title: "Establish a Unique Brand",
                        descriptions: ["Create a recognizable and trusted brand in the event decoration industry."],
                    }, {
                        title: "Deliver Exceptional Experiences",
                        descriptions: ["Provide clients with personalized, high-quality designs that exceed their expectations."],
                    }, {
                        title: "Build a Strong Network",
                        descriptions: ["Develop relationships with reliable vendors, suppliers, and industry partners."],
                    }, {
                        title: "Grow the Business",
                        descriptions: ["Expand our client base and service offerings while maintaining profitability."],
                    }, {
                        title: "Innovate Continuously",
                        descriptions: ["Stay ahead of trends and incorporate new ideas to keep our designs fresh and relevant."],
                    }]} />
        },
        {
            title: "My approach", content:
                <ListTabContent
                    description={["My approach is rooted in creativity, collaboration, and a commitment to excellence. I believe in putting clients at the heart of every project, ensuring their vision is brought to life with precision and passion. By fostering teamwork, embracing adaptability, and maintaining a relentless focus on quality, I strive to deliver exceptional results that leave a lasting impression."]}
                    items={[{
                        title: "Client-Centric Focus",
                        descriptions: ["Prioritized understanding clients' visions and translating them into stunning designs."],
                    }, {
                        title: "Collaborative Planning",
                        descriptions: ["Worked closely with the team and clients to ensure every detail was perfect."],
                    }, {
                        title: "Agile Problem-Solving",
                        descriptions: ["Adapted quickly to challenges, from last-minute changes to logistical hurdles."],
                    }, {
                        title: "Quality Over Quantity",
                        descriptions: ["Focused on delivering exceptional quality, even if it meant taking on fewer projects initially."],
                    }, {
                        title: "Continuous Learning",
                        descriptions: ["Stayed updated on industry trends and incorporated feedback to improve our services."],
                    }]} />
        },
        {
            title: "Roadmap",
            content:
                <RoadmapTabContent
                    description={["Our journey at Ferya Event Decor & Design is a blend of strategic milestones and ambitious future plans. Below, you'll find a snapshot of what we've accomplished so far and where we're headed next, as we continue to innovate and deliver exceptional experiences for our clients."]}
                    doneItems={[
                        {
                            title: "Market Research",
                            descriptions: ["Analysis of event decoration trends.", "Identification of client needs and expectations.", "Competitive analysis to identify opportunities."]
                        }, {
                            title: "‍Pricing Study",
                            descriptions: ["Definition of a competitive pricing strategy.", "Cost and margin analysis for each service and product."]
                        }, {
                            title: "‍Marketing and Branding Strategy",
                            descriptions: ["Definition of the visual identity and core values of the brand.", "Planning of photo sessions to create an attractive portfolio.", "Selection of a photo style that reflects Ferya's elegance and creativity."]
                        }, {
                            title: "‍Supplier Research",
                            descriptions: ["Identification and selection of reliable suppliers for materials and products.", "Negotiation of contracts and supply terms."]
                        }, {
                            title: "‍Product Offering Development",
                            descriptions: ["Selection of items to sell (e.g., wedding menus, cake toppers for birthdays, centerpieces, etc.).", "Creation of prototypes and testing with a target audience."]
                        }
                    ]}
                    todoItems={
                        [{
                            title: "Launch of the Online Platform",
                            descriptions: ["Development of a user-friendly and responsive e-commerce website.", "Integration of a secure booking and payment system."]
                        }, {
                            title: "‍Launch Campaign",
                            descriptions: ["Planning and execution of a digital marketing campaign (social media, targeted ads, etc.).", "Collaboration with influencers and partners to increase visibility."]
                        }, {
                            title: "‍Expansion of Offerings",
                            descriptions: ["Addition of new products and services based on customer feedback.", "Exploration of collaborations with local event planners and vendors."]
                        }, {
                            title: "Operations Optimization",
                            descriptions: ["Implementation of a stock and order management system.", "Automation of administrative processes to improve efficiency."]
                        }, {
                            title: "‍Customer Experience",
                            descriptions: ["Creation of customized packages to meet specific client needs.", "Implementation of a feedback system to continuously improve services."]
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

