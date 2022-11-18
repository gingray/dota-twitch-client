import React, {useState} from "react";
import {Typeahead} from "react-bootstrap-typeahead";
import axios from "axios";
import {baseUrl} from "../conts";
import {useMutation, useQuery} from "@tanstack/react-query";
import {stat} from "fs";

const fetchMatches = (heroId: number) => {
    return axios.get(`${baseUrl}/api/matches`, { params: {hero_id: heroId}})
        .then((res) => res.data)
}

export const ShowMatches = ({data}:{data:any}) => {
    const mutation = useMutation(fetchMatches)

    const [state, setState] = useState({
        heroId: 0,
    });

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

    return(
        <>
            <h2>Show matches for particular hero</h2>

            <form>
                <div className={'mb-3'}>
                    <Typeahead id={'hero-selection'} onChange={onChangeHeroSelection} options={data} labelKey={'HeroName'}></Typeahead>
                </div>

                <div className={'mb-3 d-grid'}>
                    <button className={'btn btn-success'} type={'submit'} onClick={(event) => {
                        mutation.mutate(state.heroId)
                        event.preventDefault()
                    }}>Show</button>
                </div>
            </form>
        </>
    )
}