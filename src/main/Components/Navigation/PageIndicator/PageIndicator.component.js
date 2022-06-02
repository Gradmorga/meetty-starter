

import './PageIndicator.style.scss';

import React from 'react';

import { NavLink } from 'react-router-dom';


const PageIndicator = ({ page, sectionIndex, isActive, pageIndex, activeClass = "", classes = []}) => {

    const { sections, route } = page;

    return (
        <NavLink
            to={route}
            className={({ isActive }) => `${classes.join(" ")} ${isActive ? activeClass : ""}`}
        >
            <p className='indicator__page-index'> { pageIndex < 10 ? `0${pageIndex + 1}` : pageIndex + 1 } </p>

            <ul className='indicator__bars'>
                {
                    sections.map((section, index) => {
                        const classes = ['indicator__bar'];

                        if (isActive && (sectionIndex === index))
                            classes.push('indicator__bar--active');

                        return (<li key={index} className={classes.join(' ')} />)
                    })
                }
            </ul>

            <p className={`indicator__section-name ${isActive ? "indicator__section-name--active" : ""}`}>
                { isActive ? sections[sectionIndex].label : "" }
            </p>

            <p className={`indicator__section-title ${isActive ? "indicator__section-title--active" : ""}`}>
                { isActive ? sections[sectionIndex].title : "" }
            </p>
        </NavLink>
    );
};


export default PageIndicator;