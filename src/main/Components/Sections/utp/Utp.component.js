

import './Utp.style.scss';

import React from 'react';
import Block from "../../Ui/Block/Block.component";
import { Link } from "react-router-dom";
import {
    Graph,
    Node
} from "../../Ui/Graph/Graph.component";


const Utp = () => (
    <section>
        <h1 className="visually-hidden">New way of society communication and time spending</h1>

        <Block classes={['utp']}>

            <Graph classes={["utp__web-wrapper"]} styles={{
                lineWidth:   2,
                strokeStyle: "#861c82"
            }}>
                <Node domRef={React.useRef(null)} classes={["hexagon", "hexagon--small", "hexagon--button", "hexagon--1"]}>
                    <Link tabIndex={'1'} to="#">
                        <span className='hexagon__title'> Try now </span>
                    </Link>

                    <Node domRef={React.useRef(null)} classes={["hexagon", "hexagon--normal", "hexagon--2"]}>
                        <Node domRef={React.useRef(null)} classes={["hexagon", "hexagon--big", "hexagon--3"]}/>
                        <Node domRef={React.useRef(null)} classes={["hexagon", "hexagon--big", "hexagon--4"]}/>
                    </Node>

                    <Node domRef={React.useRef(null)} classes={["hexagon", "hexagon--normal", "hexagon--5"]}>
                        <Node domRef={React.useRef(null)} classes={["hexagon", "hexagon--big", "hexagon--6"]}/>
                    </Node>
                </Node>
            </Graph>

            <div className='utp__wrapper'>
                <h2 className='main-title utp__main-title'>
                    Just <br/> title
                </h2>

                <p className='main-subtitle utp__main-subtitle'>
                    Very short description
                </p>
            </div>
        </Block>
    </section>
);


Utp.blocks = 1;


export default Utp;