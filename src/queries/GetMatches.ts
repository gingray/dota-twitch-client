import {useQuery} from "@tanstack/react-query";
import {baseUrl} from "../conts";
import axios from "axios";

type Params = {
    hero_id: number
}

interface IMatch {
    ID: number
}

export const GetMatchesQueryKey = "ListMatches"

export const GetMatches = ({params}:{params: Params | null }): Promise<Array<IMatch>> => {
    const url = `${baseUrl}/api/matches`
    return axios.get(url, {params})
        .then((res) => {
            return res.data as any
        })
}