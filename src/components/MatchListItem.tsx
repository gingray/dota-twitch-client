import {MatchSide} from "./MatchSide";

export const MatchListItem = ({match}:{match: any}) => {
    const radianPlayer = match.MatchPlayers.filter((item:any) => item.IsRadiant)
    const direPlayer = match.MatchPlayers.filter((item:any) => !item.IsRadiant)

    return (
        <div className={'match-list-item'}>
            <div className={'list-item-id'}>
                <a target={'_blank'} href={`https://stratz.com/matches/${match.DotaMatchId}`}>
                    {match.DotaMatchId}
                </a>
            </div>
            <MatchSide players={radianPlayer} isVictory={match.RadiantWin}/>
            <MatchSide players={direPlayer} isVictory={!match.RadiantWin}/>
        </div>
    )
}