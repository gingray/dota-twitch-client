import classNames from "classnames";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
export const HeroPlayer = ({heroPlayer}: {heroPlayer:any}) => {
    const heroImage = heroPlayer.Hero.HeroName.toLowerCase().replaceAll(" ", "_") + '_vert.png'
    const renderTooltip = (props:any) => (
        <Tooltip id="button-tooltip" {...props}>{heroPlayer.PlayerName}</Tooltip>
    );
    const css = classNames({
        "hero-player-card": true,
        "tracked-player-card": heroPlayer.IsTrackedPlayer
    })
    if (heroPlayer.IsTrackedPlayer) {
        console.log(heroPlayer)
    }
    return (
        <OverlayTrigger  placement="top"
                         delay={{ show: 150, hide: 400 }}
                         overlay={renderTooltip}>
        <span className={css}>
            <img alt={heroPlayer.Hero.HeroName} width={42} height={60} src={process.env.PUBLIC_URL + `/images/heroes/${heroImage}`}/>
        </span>
        </OverlayTrigger>
    )
}