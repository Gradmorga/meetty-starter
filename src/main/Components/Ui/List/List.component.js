

import './List.style.scss';

import React from 'react';


const List = ({ classes = [], children, ...props }) => (
    <ul {...props} className={`list ${ classes.join(' ') }`}>
        { children }
    </ul>
);


export default List;

