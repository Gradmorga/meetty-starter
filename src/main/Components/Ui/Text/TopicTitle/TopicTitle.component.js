

import "./Topic.style.scss";

import React from "react";


const TopicTitle = ({ children, classes = [] }) => (
    <h4 className={`topic-title ${ classes.join(" ") }`}>
        { children }
    </h4>
);


export default TopicTitle;