import {FetchMatches} from "./FetchMatches";
import {ShowMatches} from "./ShowMatches";
import {Header} from "./Header";
import {useQuery} from "@tanstack/react-query";
import {baseUrl} from "../conts";
import axios from "axios";
import React from "react";
import {ListMatches} from "./ListMatches";

export const Matches = () => {

    const { isLoading, error, data, isFetching } = useQuery([], () => {
        const url = `${baseUrl}/api/heroes`
        return axios
            .get(url)
            .then((res) => {

                return res.data as any
            })
    });
    if (isLoading) return <div>Loading...</div>;

    if (error) return <div className={"error"}>An error has occurred: </div>;
    return (
        <>
            <Header/>
            <div className={'app-container'}>
                <div className={'matches-container'}>
                    <div className={'fetch-matches'}>
                        <FetchMatches data={data}/>
                    </div>
                    <div className={'show-matches'}>
                        <ShowMatches data={data}/>
                    </div>
                </div>
                <div className={'list-matches-container'}>
                    <ListMatches></ListMatches>
                </div>
            </div>
        </>
    );
}