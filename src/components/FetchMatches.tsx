import React, {useState} from "react";
import { Typeahead } from 'react-bootstrap-typeahead'
import axios from "axios";
import {baseUrl} from "../conts";
import {useMutation} from "@tanstack/react-query";

type FetchMatchesPayload = {
    hero_id: number
    steam_account_id: number
}
const fetchMutation = (payload: FetchMatchesPayload) => {
    axios.defaults.withCredentials = true
    return axios.post(`${baseUrl}/api/fetch_matches`,payload)
}

export const FetchMatches = ({data}:{data:any}) => {
    const mutation = useMutation(fetchMutation)
    const [state, setState] = useState<FetchMatchesPayload>({
        hero_id: 0,
        steam_account_id: 0
    });

    console.log(['state', state])

    const onChangeHeroSelection = (selected: any) => {
        if (selected.length < 1) {
            return
        }
        setState({
            ...state,
            hero_id: selected[0].id
            }
        )

    }

    const onChangeSteamAccount = (event: any) => {
        const {value} = event.target
        setState({
                ...state,
                steam_account_id: parseInt(value)
            }
        )

    }


    return(
        <>
            <h2> Fetch player matches for particular hero</h2>
            <form>
                <div className={'mb-3'}>
                    <Typeahead id={'hero-selection'} onChange={onChangeHeroSelection} options={data} labelKey={'HeroName'}></Typeahead>
                </div>
                <div className={'mb-3'}>
                    <input onChange={onChangeSteamAccount} className={'form-control'} type={'number'}/>
                </div>
                <div className={'mb-3 d-grid'}>
                    <button onClick={(event) => {
                        mutation.mutate(state)
                        event.preventDefault()
                    }}className={'btn btn-success'} type={'submit'}>Find</button>
                </div>

            </form>
        </>
    )
}