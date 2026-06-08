import React, {useState} from "react";
import {Header} from "./Header";

export const Stream = () => {
    const [btnText, setBtnText] = useState("Copy")
    const clickStreamer = () => {
        const type = "text/plain";
        const clipboardItemData = {
            [type]: "https://twitch.tv/g1ngray",
        };
        const clipboardItem = new ClipboardItem(clipboardItemData);
        navigator.clipboard.write([clipboardItem]).then((result) => {
            setBtnText("Copied")
        }).then((result) => {
            setTimeout(() => {
                setBtnText("Copy")
            }, 1000);
        })
    }

    return (
        <React.Fragment>
            <Header/>
            <div className={'app-streamer'}>
                <div className={'container'}>
                    <h1>Stream</h1>
                    <div>
                        <span>https://twitch.tv/g1ngray</span>
                        <div>
                            <button className={"btn btn-primary btn-block"} onClick={clickStreamer}>{btnText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}