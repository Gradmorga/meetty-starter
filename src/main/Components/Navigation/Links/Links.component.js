

import React     from 'react';
import PropTypes from 'prop-types';

import { Link }    from "react-router-dom";
import List from "../../Ui/List/List.component";


const Links = ({ links, linkClass, children, classes = [] }) => {

    return (
        <List classes={[classes]}>
            {
                links.map(((link, index) => (
                    <li key={index}>
                        <Link className={linkClass} to={link.url}>{link.name}</Link>
                    </li>
                )))
            }
            { children }
        </List>
    );
};


Links.propTypes = {
    socialLinks: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    linkClass:   PropTypes.string
};


export default Links