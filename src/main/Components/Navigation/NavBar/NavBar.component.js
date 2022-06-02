

import './NavBar.style.scss'

import React from 'react';

import PageIndicator from "../PageIndicator/PageIndicator.component";
import List from "../../Ui/List/List.component";
import { useNavigator } from "../../../react/Providers/Navigator/navigator.provider";


const NavBar = ({ pages }) => {

    const { currentSectionIndex, currentPageIndex } = useNavigator();

    return (
        <List classes={["nav-bar"]}>
            {
                pages.map((page, index) =>
                    <li key={index}>
                        <PageIndicator
                            isActive={currentPageIndex === index}
                            sectionIndex={currentSectionIndex}
                            classes={["nav-bar__indicator"]}
                            activeClass="nav-bar__indicator--active"
                            page={page}
                            pageIndex={index}
                        />
                    </li>
                )
            }
        </List>
    );
};


export default NavBar;