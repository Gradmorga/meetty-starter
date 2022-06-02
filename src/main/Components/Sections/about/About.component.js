

import './About.style.scss';

import React from 'react';

import { CSSTransition } from "react-transition-group";

import TopicTitle  from "../../Ui/Text/TopicTitle/TopicTitle.component";
import RegularText from "../../Ui/Text/RegularText/RegularText.component";
import Block from "../../Ui/Block/Block.component";
import {
    ClicklessComponent,
    BlockMetrics } from "../../Containers/Clickless/ClicklessComponent.component";

import { ReactComponent as Privacy } from "./res/privacy.svg";
import { ReactComponent as Care }    from "./res/care.svg";
import { ReactComponent as Connect } from "./res/connect.svg";


const Topic = ({ children, iconRender, classes = [] }) => (

    <ClicklessComponent>
        {
            (isActive, _, setActivator) => (
                <CSSTransition in={isActive} timeout={400} classNames="topic">
                    <div
                        ref={ref => setActivator(new BlockMetrics(ref, {
                            left:  0.9,
                            right: 0.9
                        }))}
                        className={`about__item ${classes.join(" ")}`}
                    >
                        { iconRender(isActive) }

                        <CSSTransition in={isActive} timeout={2000} classNames="topic__content">
                            { children }
                        </CSSTransition>
                    </div>
                </CSSTransition>
            )
        }
    </ClicklessComponent>
);


const About = () => {

    return (
        <section>
            <Block classes={["about"]}>

                <Topic
                    classes={["about__security"]}
                    iconRender={isEntered => <Privacy className={`about__icon ${isEntered ? "about__icon--active" : ""}`}/>}
                >
                    <div className="about__content">
                        <TopicTitle classes={["about__title"]}>
                            First title
                        </TopicTitle>

                        <RegularText classes={["about__text"]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                            sed do eiusmod tempor incididunt ut labore <br/>
                            et dolore magna aliqua.
                        </RegularText>
                    </div>
                </Topic>

                <Topic
                    classes={["about__social"]}
                    iconRender={isEntered => <Connect className={`about__icon ${isEntered ? "about__icon--active" : ""}`}/>}
                >
                    <div className="about__content">
                        <TopicTitle classes={["about__title"]}>
                            Second title
                        </TopicTitle>

                        <RegularText classes={["about__text"]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                            sed do eiusmod tempor incididunt ut labore <br/>
                            et dolore magna aliqua.
                        </RegularText>
                    </div>
                </Topic>

                <Topic
                    classes={["about__care"]}
                    iconRender={isEntered => <Care className={`about__icon ${isEntered ? "about__icon--active" : ""}`}/>}
                >
                    <div className="about__content">
                        <TopicTitle classes={["about__title"]}>
                            Third title
                        </TopicTitle>

                        <RegularText classes={["about__text"]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                            sed do eiusmod tempor incididunt ut labore <br/>
                            et dolore magna aliqua.
                        </RegularText>
                    </div>
                </Topic>
            </Block>
        </section>
    );
};


About.blocks = 1;


export default About;