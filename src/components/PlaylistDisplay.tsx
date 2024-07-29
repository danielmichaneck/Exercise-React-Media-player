import { ReactElement } from "react";
import { songList } from "../data";
import { SongDisplay } from "./SongDisplay";

import "./PlaylistDisplay.css"

export function PlaylistDisplay(): ReactElement {
    return <section className="playlist-display">
        {songList.songs.map((song) => (
            <SongDisplay info={song}/>
        ))}
        </section>;
}