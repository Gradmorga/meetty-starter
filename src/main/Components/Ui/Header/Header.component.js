

import './Header.style.scss';

import { ReactComponent as EyeIcon  } from "./res/eye.svg";
import { ReactComponent as MenuIcon } from "./res/menu.svg";

import React  from 'react';

import NavLinks  from "../../Navigation/NavLinks/NavLinks.component";
import Links from "../../Navigation/Links/Links.component";


import { BlockMetrics, ClicklessComponent } from "../../Containers/Clickless/ClicklessComponent.component";
import ClicklessSwitcher from "../../Containers/Clickless/ClicklessSwitcher.component";


export default function Header({ pages, medias, children }) {


    return (
        <header className='header'>
            <nav>
                <ClicklessComponent>
                    {
                        (isActive, onClick, setActivator, addChild) => {

                            const toggleClasses = ["header__button", "header__toggle", isActive ? "header__toggle--active" : ""];

                            const navClasses    = ["header__nav-wrapper", isActive ? "header__nav-wrapper--active" : ""];

                            const socialClasses = ["header__social-wrapper", isActive ? "header__social-wrapper--active" : ""];

                            return (
                                <>
                                    <div
                                        className={navClasses.join(" ")}
                                        ref={ref => addChild(new BlockMetrics(ref, {
                                            bottom: 1.3
                                        }))}
                                    >
                                        <NavLinks
                                            classes={["header__nav-links"]}
                                            pages={pages}
                                            navLinkClass="header__link header__nav-link"
                                            activeClass="header__nav-link--active"
                                        />
                                    </div>

                                    <div
                                        className={socialClasses.join(" ")}
                                        ref={ref => addChild(new BlockMetrics(ref, {
                                            left: 1.3
                                        }))}
                                    >

                                        <Links links={medias} linkClass={'header__link header__social-link'} classes={["header__social-links"]}>

                                            <ClicklessSwitcher>
                                                {
                                                    (isEyesSelected, onClick) => (
                                                        <button
                                                            className={["header__switcher", "header__button",
                                                                isEyesSelected ? "header__switcher--active" : ""].join(" ")}
                                                            aria-label="Eyes control mode"
                                                            onClick={onClick}
                                                        >
                                                            <EyeIcon className='switcher__icon'/>
                                                        </button>
                                                    )
                                                }
                                            </ClicklessSwitcher>
                                        </Links>
                                    </div>

                                    <button
                                        className={toggleClasses.join(" ")}
                                        ref={ref => setActivator(new BlockMetrics(ref, {
                                            bottom: 1.3,
                                            left:   1.3
                                        }))}
                                        onClick={onClick}
                                    >
                                        <MenuIcon className="toggle__icon"/>
                                    </button>
                                </>
                            )
                        }
                    }
                </ClicklessComponent>

                { children }

            </nav>
        </header>
    )
}