import React, {useState} from "react";
import {Typeahead} from "react-bootstrap-typeahead";
import axios from "axios";
import {baseUrl} from "../conts";
import {useMutation, useQuery} from "@tanstack/react-query";
import {GetMatches, GetMatchesQueryKey} from "../queries/GetMatches";

export const ShowMatches = ({data}:{data:any}) => {
    const {refetch} = useQuery([GetMatchesQueryKey], () => {
        const params = {hero_id: state.heroId}
        return GetMatches({params})
    }, {enabled: false, refetchOnWindowFocus: false})

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
                        refetch()
                        event.preventDefault()
                    }}>Show</button>
                </div>
            </form>
        </>
    )
}