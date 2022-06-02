

import './Loader.style.scss';

import React from 'react';

import ThemedLoader from "./ThemedLoader/ThemedLoader.component";


const Loader = ({ isLoading, fixed, classes = [] }) => {

    const loaderClasses = ["loader"];

    if (fixed)
        loaderClasses.push("loader--fixed");

    const loader = <div className={`${loaderClasses.join(" ")} ${classes.join(" ")}`} />

    if (isLoading === undefined)
        return loader;
    else
        return isLoading ? loader : null;
}


const ThemeLoader = ThemedLoader(Loader);


export {
    Loader,
    ThemeLoader
};