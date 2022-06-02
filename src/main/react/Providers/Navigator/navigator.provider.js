

import React from 'react';

import { useLocation } from 'react-router-dom';

import useNavigation from "../../Hooks/useNavigation";


const NavigatorContext = React.createContext(null);

export const useNavigator = () => React.useContext(NavigatorContext);

export const NavigatorProvider = ({ children, pages }) => {

    const { navigation, goBack, goNext, onPathnameChanged } = useNavigation(pages);

    const location = useLocation();

    React.useEffect(() => {
        onPathnameChanged(location.pathname)
    }, [location.pathname, onPathnameChanged]);

    return (
        <NavigatorContext.Provider
            value={{
                goBack,
                goNext,
                currentSectionIndex: navigation.currentSectionIndex,
                currentPageIndex:    navigation.currentPageIndex,
                currentBlockIndex:   navigation.currentBlockIndex
            }}
        >
            { children }
        </NavigatorContext.Provider>
    );
};