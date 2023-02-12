import {useQuery} from "@tanstack/react-query";
import {baseUrl} from "../conts";
import axios from "axios";
import {Streamer} from "../streamer";
import {chunk} from "../utils";
import React from "react";
import {Header} from "./Header";
import {Helmet} from "react-helmet";

export const Root = () => {
    const { isLoading, error, data, isFetching } = useQuery(['StreamersPayload'], () => {
        const url = `${baseUrl}/api/events`
        return axios
            .get(url)
            .then((res) => {

                return res.data as any
            })
    });
    if (isLoading) return <div>Loading...</div>;

    if (error) return <div className={"error"}>An error has occurred: </div>;
    const streamers  = data.map((item: any) => <Streamer key={item.ID} streamerEvent={item} />)
    const parts = chunk(streamers, 3).map((group, idx) => <div className={"row"} key={idx}>{group as any}</div>)

    return (
        <React.Fragment>
            <Helmet>
                <title>Dota 2 Show | Show Streamers</title>e
                <meta name={"description"} content={"Show online streamers | twitch streamers"}/>
                <meta name={"keywords"} content={"Dota 2, Streamers, Players Online"}/>
            </Helmet>
            <Header/>
            <div className={'app-container'}>
                {parts}
                <div>{isFetching ? "Updating..." : ""}</div>
            </div>
        </React.Fragment>
    )
}