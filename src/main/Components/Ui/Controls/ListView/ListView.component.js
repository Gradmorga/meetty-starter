

import "./ListView.style.scss";

import React     from 'react';
import PropTypes from 'prop-types';

import List from "../../List/List.component";


const Themed = View => ({ classes = [], ...props }) => (
    <View {...props} classes={["list-view--normal", ...classes]} />
);


const ListView = ({ Delegate, classes = [], model, currentIndex, onItemClicked }) => (
    <List
        classes={["list-view", ...classes]}
        onWheel={e => e.stopPropagation()}
        onTouchStart={e => e.stopPropagation()}
        onTouchMove={e => e.stopPropagation()}
    >
        {
            model.model.map((item, index) => (
                <li key={index}>
                    <Delegate isCurrent={index === currentIndex} onClick={onItemClicked.bind(null, index)} item={item} />
                </li>
            ))
        }
    </List>
);


ListView.propTypes = {
    Delegate: PropTypes.elementType.isRequired,

    classes:  PropTypes.arrayOf(PropTypes.string),
    model:    PropTypes.object.isRequired,

    onItemClicked: PropTypes.func.isRequired
};


const ThemedListView = Themed(ListView);


export {
    ListView,
    ThemedListView
};