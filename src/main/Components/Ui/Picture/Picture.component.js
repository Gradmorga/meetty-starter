

import React     from 'react';
import PropTypes from "prop-types";

//import Image from "../Image/Image.component";


const Picture = ({children, sourcesSet}) => (
    <picture>
        { sourcesSet.map((source, index) => <source key={index} srcSet={source.srcSet.join(", ")} media={source.media}/>) }
        { children }
    </picture>
);


Picture.propTypes = {
    //children: PropTypes.objectOf(Image).isRequired,
    sourcesSet:
        PropTypes.arrayOf(
            PropTypes.exact({
                media: PropTypes.string,
                srcSet: PropTypes.arrayOf(PropTypes.string)
            })
        ).isRequired
};


export default Picture;