import {StreamerEvent} from "./types";
import {baseUrl} from "./conts";

export const Streamer = ({streamerEvent}:{streamerEvent: StreamerEvent}) => {
    const imagePath = `${baseUrl}/static/${streamerEvent.ImagePath}`
    return (<div key={streamerEvent.ID}>
        <div>Login: {streamerEvent.Streamer.Login}</div>
        <div>
            <a href={streamerEvent.Streamer.StreamUrl}>{streamerEvent.Streamer.StreamUrl}</a>
        </div>
        <div>
            <img src={imagePath}/>
        </div>
        <div>{streamerEvent.ViewsCount}</div>
    </div>);
}