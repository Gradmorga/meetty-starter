

import React     from 'react';
import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";
import List from "../../Ui/List/List.component";


const NavLinks = ({ pages, navLinkClass, activeClass = "", classes = [] }) => (
    <List classes={classes} >
        {
            pages.map((page, index) => (
                <li key={index}>
                    <NavLink
                        to={page.route}
                        className={({ isActive }) => `${navLinkClass} ${isActive ? activeClass : ""}`}
                    >
                        { page.label }
                    </NavLink>
                </li>
            ))
        }
    </List>
);


NavLinks.propTypes = {
    pages:           PropTypes.arrayOf(PropTypes.object),
    navLinkClass:        PropTypes.string,
    activeLink: PropTypes.string,
    navComponents:    PropTypes.arrayOf(PropTypes.element)
};


export default NavLinks