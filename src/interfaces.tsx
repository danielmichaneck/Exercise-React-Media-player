

export interface ISongInformation {
    id: string,
    artist: string,
    duration: number,
    image: string,
    title: string;
}

export interface ISongList {
    id: string;
    songs: ISongInformation[];
}

export interface IImage {
    ref: string,
}