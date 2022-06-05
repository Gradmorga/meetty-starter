

import './Endpoints.style.scss';

import React from 'react';

import {
    Route,
    Routes,
    useLocation,
    Navigate
} from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import Page from "../../Ui/Page/Page.component";

import { Direction, useScrollable } from "../../../react/Hooks/useScrollable";
import { useNavigator } from "../../../react/Providers/Navigator/navigator.provider";


const Endpoints = ({ pages }) => {

    const location = useLocation();

    const { goBack, goNext } = useNavigator();

    const onScrolled = direction => {
        if (direction === Direction.UP)
            goBack()
        else if (direction === Direction.DOWN)
            goNext();
    }

    const { onWheel, onTouchMove, onTouchStart } = useScrollable(onScrolled);

    React.useEffect(() => {
        window.addEventListener("wheel",      onWheel,     { passive: false });
        window.addEventListener("touchmove",  onTouchMove, { passive: false });
        window.addEventListener("touchstart", onTouchStart);

        return () => {
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchmove",  onTouchMove);
            window.removeEventListener("wheel",      onWheel);
        };
    }, [onWheel, onTouchMove, onTouchStart]);


    return (
        <TransitionGroup>
            <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
                <Routes location={location}>
                    {
                        pages.map((page, index) => (
                            <Route key={index} path={page.route} element={ <Page index={index} page={page} /> } />
                        ))
                    }
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}


export default Endpoints;