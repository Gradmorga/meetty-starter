

import React from 'react';

import { useNavigator } from "../../../react/Providers/Navigator/navigator.provider";


const Page = ({ page, children, index }) => {

    const navigation = useNavigator();

    const { sections, blocks } = page;

    React.useEffect(() => {

        const blockHeight = document.body.scrollHeight / blocks;

        const topOffset = navigation.currentBlockIndex * blockHeight;

        const options = {
            left:      0,
            top:       topOffset,
            behavior:  index === navigation.currentPageIndex ? "smooth" : "auto"
        };

        window.scroll({ ...options });

    }, [navigation, blocks, index]);


    return (
        <div className="page">
            {
                sections.map(({ component: Section }, index) => <Section key={index} />)
            }

            { children }
        </div>
    )
};


export default Page;