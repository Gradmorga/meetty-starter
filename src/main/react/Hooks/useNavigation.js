

import React from "react";

import { useNavigate } from "react-router-dom";


const useNavigation = pages => {

    const [navigation, setNavigation] = React.useState({
        currentPageIndex:    0,
        currentSectionIndex: 0,
        currentBlockIndex:   0
    });


    const sectionIndex = blockIndex => {

        const pageSections = pages[navigation.currentPageIndex].sections;

        let blocksCount = 0;

        for (let i = 0; i < pageSections.length; i++) {
            blocksCount += pageSections[i].length;

            if (blockIndex > (blocksCount - 1))
                continue;

            return i;
        }
    }


    const navigate = useNavigate();

    const setCurrentPage = newPageIndex => {

        if (newPageIndex < 0 || newPageIndex > (pages.length - 1) || newPageIndex === navigation.currentPageIndex)
            return;

        navigate(pages[newPageIndex].route);
    };


    const setCurrentBlock =newBlockIndex => {

        if (newBlockIndex < 0) {
            setCurrentPage(navigation.currentPageIndex - 1);
            return;
        }

        if (newBlockIndex > (pages[navigation.currentPageIndex].blocks - 1)) {
            setCurrentPage(navigation.currentPageIndex + 1);
            return;
        }

        setNavigation(prevState => {
            if (prevState.currentBlockIndex === newBlockIndex)
                return prevState;

            return {
                ...prevState,
                currentBlockIndex: newBlockIndex,
                currentSectionIndex: sectionIndex(newBlockIndex)
            };
        });
    };


    const onPathnameChanged = React.useCallback(pathname => {
        pages.some((page, index) => {
            if (page.route === pathname) {

                setNavigation({
                    currentSectionIndex: 0,
                    currentBlockIndex:   0,
                    currentPageIndex:    index
                });

                return true;
            } else
                return false;
        });
    }, [setNavigation, pages]);


    return {
        navigation,
        goBack: setCurrentBlock.bind(null, navigation.currentBlockIndex - 1),
        goNext: setCurrentBlock.bind(null, navigation.currentBlockIndex + 1),
        onPathnameChanged
    };
};


export default useNavigation;