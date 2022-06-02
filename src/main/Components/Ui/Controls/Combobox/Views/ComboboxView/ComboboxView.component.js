

import './ComboboxView.style.scss';

import React     from "react";
import PropTypes from "prop-types";


const ComboboxView = ({
                          ListView, IDropdown, IField, Delegate,
                          classes = [], isOpen, currentIndex, onClick, onItemClicked, model, message, required = false
}) => (
    <div className={`combobox ${classes.join(" ")}`} >
        <IField item={model.itemAt(currentIndex)} required={required} onClick={onClick} message={message} />

        <IDropdown classes={["combobox__dropdown"]} isOpen={isOpen} onOutsideClick={onClick} >
            <ListView
                Delegate={Delegate}
                currentIndex={currentIndex}
                classes={["combobox__items"]}
                model={model}
                onItemClicked={onItemClicked}
            />
        </IDropdown>
    </div>
);


ComboboxView.propTypes = {
    IDropdown: PropTypes.elementType.isRequired,
    ListView:  PropTypes.elementType.isRequired,
    Delegate:  PropTypes.elementType.isRequired,
    IField:    PropTypes.elementType.isRequired,

    classes: PropTypes.arrayOf(PropTypes.string),
    model:   PropTypes.object.isRequired,
    isOpen:  PropTypes.bool.isRequired,

    onClick:       PropTypes.func.isRequired,
    onItemClicked: PropTypes.func.isRequired
};


export default ComboboxView;