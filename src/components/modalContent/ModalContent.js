import React, { useContext, useState } from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ModalContent.scss";

const ModalContent = ({ title, contentTabs }) => {

    const [activeTab, setActiveTab] = useState(0);
    const { isDark } = useContext(StyleContext);
    return <div className={`modal-content-card ${isDark ? "modal-content-card-background-dark" : "modal-content-card-background"}`} >
        <h1>{title}</h1>
        <div className="modal-content-tab-button space-x-4">

            {contentTabs.map((tab, index) => {
                return <button key={index} className={`modal-tab ${activeTab === index ? "modal-tab-active" : ""}`} onClick={() => setActiveTab(index)}>{tab.title}</button>
            })}

        </div>

        <div className="tab-divider"></div>

        {contentTabs[activeTab].content}
    </div >;
};



const TextTabContent = ({ content }) => {
    return <div className="tab-content">
        {content.map((desc, index) => <div key={index}>{desc}</div>)}
    </div>;
}

const TimelineTabContent = ({ position, date, description }) => {
    return <div className="timeline-tab-content">
        <div className="timeline-tab-header">
            <h1>{position}</h1>
            <p>{date}</p>     </div>
        <div className="timeline-tab-description">
            {description.map((desc, index) => <div key={index}>{desc}</div>)}
        </div>
    </div>
}

const ListTabContent = ({ description, items }) => {
    return <div className="list-tab-content">
        {description.map((desc, index) => <div key={index}>{desc}</div>)}
        <div className="list-tab-items">
            {items.map((item, index) =>
                <div key={index} className="list-tab-item">
                    <span>{emoji("⚡ ")}{item.title}</span>
                    <ul className="list-tab-item-description">
                        {item.descriptions.map((description, index) => <li key={index}>{description}</li>)}
                    </ul>
                </div>
            )}
        </div>


    </div>
}

const RoadmapTabContent = ({ description, doneItems, todoItems }) => {
    return <div className="list-tab-content">
        {description.map((desc, index) => <div key={index}>{desc}</div>)}
        <div className="list-tab-items">
            {doneItems.map((item, index) =>
                <div key={index} className="list-tab-item">
                    <span>{emoji("⚡ ")}{item.title}</span>
                    <ul className="list-tab-item-description">
                        {item.descriptions.map((description, index) => <li key={index}>{description}</li>)}
                    </ul>
                </div>
            )}
        </div>


    </div>
}

export { ListTabContent, ModalContent, RoadmapTabContent, TextTabContent, TimelineTabContent };

