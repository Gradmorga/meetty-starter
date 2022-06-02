


import './Summary.style.scss';

import React   from 'react';
import Block   from "../../Ui/Block/Block.component";
import Image   from "../../Ui/Image/Image.component";
import Picture from "../../Ui/Picture/Picture.component";
import HeadingTitle from "../../Ui/Text/HeadingTitle/HeadingTitle.component";

import { CSSTransition } from "react-transition-group";
import {BlockMetrics, ClicklessComponent} from "../../Containers/Clickless/ClicklessComponent.component";

import DesktopBg1       from "./res/summary_desktop@1.webp";
import RetinaDesktopBg1 from "./res/summary_desktop@2.webp";
import MobileBg1        from "./res/summary_mobile@1.webp";
import RetinaMobileBg1  from "./res/summary_mobile@2.webp";
import TabletBg1        from "./res/summary_tablet@1.webp";
import RetinaTabletBg1  from "./res/summary_tablet@2.webp";


const Summary = () => {

    const blockBg = [
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

    
    return (
        <section className="summary">
            <ClicklessComponent>
                {
                    (isActive, _, setActivator) => (
                        <CSSTransition in={isActive} timeout={1000} classNames="summary__wrapper">

                            <Block classes={["summary__block", "summary__wrapper"]}>
                                <Picture sourcesSet={blockBg}>
                                    <Image
                                        classes={["summary__image"]}
                                        alt="Summary"
                                        srcSet={[DesktopBg1, `${RetinaDesktopBg1} 2x`]}
                                    />
                                </Picture>

                                <div ref={ref => setActivator(new BlockMetrics(ref))} className={`summary__trigger ${isActive ? "summary__trigger--expanded" : ""}`}/>

                                <HeadingTitle classes={["summary__title"]}>
                                    Summary title
                                </HeadingTitle>
                            </Block>
                        </CSSTransition>
                    )
                }
            </ClicklessComponent>
        </section>
    );
};


Summary.blocks = 1;


export default Summary;