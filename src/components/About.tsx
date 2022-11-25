import React from "react";
import {Header} from "./Header";

export const About = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className={'app-about'}>
                <h1>Show which heroes Dota streamers play currently</h1>
            </div>
        </React.Fragment>

    )
}