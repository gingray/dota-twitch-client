import {Header} from "./Header";
import {useQuery} from "@tanstack/react-query";
import {baseUrl} from "../conts";
import axios from "axios";
import React, {useState} from "react";
import { Typeahead } from 'react-bootstrap-typeahead'

export const Matches = () => {

    const [state, setState] = useState({
        heroId: null,
        steamAccountId: 0
    });

    console.log(['state', state])

    const onChangeHeroSelection = (selected: any) => {
        if (selected.length < 1) {
            return
        }
        setState({
            ...state,
            heroId: selected[0].id
            }
        )

    }

    const onChangeSteamAccount = (event: any) => {
        const {value} = event.target
        setState({
                ...state,
                steamAccountId: parseInt(value)
            }
        )

    }

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

    const options = data.map((item: any) => <option key={item.ID} value={item.ID}>{item.HeroName}</option>)

    return(
        <>
            <Header/>
            <div className={'app-container'}>
                <form>
                    <div className={'mb-3'}>
                        <Typeahead id={'hero-selection'} onChange={onChangeHeroSelection} options={data} labelKey={'HeroName'}></Typeahead>
                    </div>
                    <div className={'mb-3'}>
                        <input onChange={onChangeSteamAccount} className={'form-control'} type={'number'}/>
                    </div>
                    <div className={'mb-3 d-grid'}>
                        <button className={'btn btn-success'} type={'submit'}>Find</button>
                    </div>

                </form>
            </div>
        </>
    )
}