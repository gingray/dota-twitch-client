import {HeroPlayer} from "./HeroPlayer";

export const MatchSide = ({players, isVictory}:{players:any, isVictory: boolean}) => {
    const cssClass = isVictory ? 'victory' : 'defeat'
    // console.log('players', players)
    const heroPlayers = players.map((item:any) => <HeroPlayer key={item.ID.toString()} heroPlayer={item}/>)
    return (
        <div className={`match-side ${cssClass}`}>
            {heroPlayers}
        </div>
    )
}