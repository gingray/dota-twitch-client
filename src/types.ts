export type Streamer = {
    Login: string;
    StreamUrl: string;
}

export type StreamerEvent = {
    ID: number;
    ImagePath: string;
    Streamer: Streamer
    ViewsCount: number
};