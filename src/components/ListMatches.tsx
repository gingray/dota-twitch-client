import {useQuery} from "@tanstack/react-query";
import React from "react";
import {MatchListItem} from "./MatchListItem";
import {GetMatches, GetMatchesQueryKey} from "../queries/GetMatches";

export const ListMatches = () => {
    const { isLoading, error, data, isFetching } = useQuery([GetMatchesQueryKey], () => {
        const params = null
        return GetMatches({params})
    }, {refetchOnWindowFocus: false});
    if (isLoading) return <div>Loading...</div>;

    if (error) return <div className={"error"}>An error has occurred: </div>;

    const elements = data || []
    const matches = elements.map((item:any) => <MatchListItem key={item.ID.toString()} match={item}></MatchListItem>)
    return (
        <div className={'list-matches'}>
            {matches}
        </div>
    )
}