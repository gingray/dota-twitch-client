import {StreamerEvent} from "./types";
import {baseUrl} from "./conts";

export const Streamer = ({streamerEvent}:{streamerEvent: StreamerEvent}) => {
    const imagePath = `${baseUrl}/static/${streamerEvent.ImagePath}`
    return (<div className={"streamer-cell"} key={streamerEvent.ID}>
        <div className={'streamer-image'}>
            <img src={imagePath}/>
        </div>

        <div className={'streamer-url'}>
            <a target={'_blank'} href={streamerEvent.Streamer.StreamUrl}>
                <span className={'streamer-login'}>{streamerEvent.Streamer.Login}</span>
            </a>
        </div>
        <div className={'streamer-views'}>{streamerEvent.ViewsCount}</div>
    </div>);
}