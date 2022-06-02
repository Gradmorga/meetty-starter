

import './Features.style.scss';

import React from 'react';
import Block from "../../Ui/Block/Block.component";
import Picture from "../../Ui/Picture/Picture.component";
import Image from "../../Ui/Image/Image.component";
import HeadingTitle from "../../Ui/Text/HeadingTitle/HeadingTitle.component";
import { BlockMetrics, ClicklessComponent } from "../../Containers/Clickless/ClicklessComponent.component";
import { CSSTransition } from "react-transition-group";

import DesktopBg1       from "./res/feature1_desktop@1.webp";
import RetinaDesktopBg1 from "./res/feature1_desktop@2.webp";
import TabletBg1        from "./res/feature1_tablet@1.webp";
import RetinaTabletBg1  from "./res/feature1_tablet@2.webp";
import MobileBg1        from "./res/feature1_mobile@1.webp";
import RetinaMobileBg1  from "./res/feature1_mobile@2.webp";

import DesktopBg2       from "./res/feature2_desktop@1.webp";
import RetinaDesktopBg2 from "./res/feature2_desktop@2.webp";
import TabletBg2        from "./res/feature2_tablet@1.webp";
import RetinaTabletBg2  from "./res/feature2_tablet@2.webp";
import MobileBg2        from "./res/feature2_mobile@1.webp";
import RetinaMobileBg2  from "./res/feature2_mobile@2.webp";

import DesktopBg3       from "./res/feature3_desktop@1.webp";
import RetinaDesktopBg3 from "./res/feature3_desktop@2.webp";
import TabletBg3        from "./res/feature3_tablet@1.webp";
import RetinaTabletBg3  from "./res/feature3_tablet@2.webp";
import MobileBg3        from "./res/feature3_mobile@1.webp";
import RetinaMobileBg3  from "./res/feature3_mobile@2.webp";


const firstFeature = [
    {
        media: "(min-width:1200px)",
        srcSet: [
            DesktopBg1,
            `${RetinaDesktopBg1} 2x`
        ]
    },
    {
        media: "(max-width:767px)",
        srcSet: [
            MobileBg1,
            `${RetinaMobileBg1} 2x`
        ]
    },
    {
        media: "(min-width:768px)",
        srcSet: [
            TabletBg1,
            `${RetinaTabletBg1} 2x`
        ]
    }
];

const secondFeature = [
    {
        media: "(min-width:1200px)",
        srcSet: [
            DesktopBg2,
            `${RetinaDesktopBg2} 2x`
        ]
    },
    {
        media: "(max-width:767px)",
        srcSet: [
            MobileBg2,
            `${RetinaMobileBg2} 2x`
        ]
    },
    {
        media: "(min-width:768px)",
        srcSet: [
            TabletBg2,
            `${RetinaTabletBg2} 2x`
        ]
    }
];

const thirdFeature = [
    {
        media: "(min-width:1200px)",
        srcSet: [
            DesktopBg3,
            `${RetinaDesktopBg3} 2x`
        ]
    },
    {
        media: "(max-width:767px)",
        srcSet: [
            MobileBg3,
            `${RetinaMobileBg3} 2x`
        ]
    },
    {
        media: "(min-width:768px)",
        srcSet: [
            TabletBg3,
            `${RetinaTabletBg3} 2x`
        ]
    }
];


const Features = () => {

    

    return (
        <section>
            <Block classes={["features__block"]}>

                <Picture sourcesSet={firstFeature}>
                    <Image
                        classes={["features__image"]}
                        alt={"Community"}
                        srcSet={[DesktopBg1, `${RetinaDesktopBg1} 2x`]}
                    />
                </Picture>

                <span className="features__gradient"/>

                <ClicklessComponent>
                    {(isActive, onClick, setActivator) => (
                        <CSSTransition in={isActive} timeout={1000} classNames='features__wrapper--left'>
                            <div className="features__wrapper features__wrapper--left">
                                <div
                                    onClick={onClick}
                                    ref={ref => setActivator(new BlockMetrics(ref))}
                                    className="features__substrate features__substrate--left"
                                >
                                    <HeadingTitle classes={
                                        ["features__title", "features__title--left", isActive ? "features__title--open" : ""]
                                    }>
                                        First feature <br/>
                                        title
                                    </HeadingTitle>
                                </div>
                            </div>
                        </CSSTransition>
                    )}
                </ClicklessComponent>
            </Block>

            <Block>
                <Picture sourcesSet={secondFeature}>
                    <Image
                        classes={["features__image"]}
                        alt={"Community"}
                        srcSet={[DesktopBg2, `${RetinaDesktopBg2} 2x`]}
                    />
                </Picture>

                <ClicklessComponent>
                    {(isActive, onClick, setActivator) => (
                        <CSSTransition in={isActive} timeout={1000} classNames='features__title--mid'>
                            <HeadingTitle
                                onClick={onClick}
                                domRef={ref => setActivator(new BlockMetrics(ref, {
                                    top:    2,
                                    bottom: 2
                                }))}
                                classes={["features__title", "features__title--mid", isActive ? "features__title--open" : ""]}
                            >
                                Second feature title
                            </HeadingTitle>
                        </CSSTransition>
                    )}
                </ClicklessComponent>
            </Block>

            <Block>
                <Picture sourcesSet={thirdFeature}>
                    <Image
                        classes={["features__image"]}
                        alt={"Community"}
                        srcSet={[DesktopBg3, `${RetinaDesktopBg3} 2x`]}
                    />
                </Picture>

                <span className="features__gradient features__gradient--left"/>

                <ClicklessComponent>
                    {(isActive, onClick, setActivator) => (
                        <CSSTransition in={isActive} timeout={1000} classNames='features__wrapper--right'>
                            <div className="features__wrapper features__wrapper--right">
                                <div
                                    onClick={onClick}
                                    ref={ref => setActivator(new BlockMetrics(ref))}
                                    className="features__substrate features__substrate--right"
                                >
                                    <HeadingTitle classes={
                                        ["features__title", "features__title--right", isActive ? "features__title--open" : ""]
                                    }>
                                        Third feature <br/>
                                        title
                                    </HeadingTitle>
                                </div>
                            </div>
                        </CSSTransition>
                    )}
                </ClicklessComponent>
            </Block>
        </section>
    );
};


Features.blocks = 3;


export default Features;