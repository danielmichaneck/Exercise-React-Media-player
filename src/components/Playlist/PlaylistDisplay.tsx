import { ReactElement } from "react";
import { songList } from "../../data";
import { SongDisplay } from "./SongDisplay";

import "./PlaylistDisplay.css"

export function PlaylistDisplay(): ReactElement {
    return <section className="playlist-display" id="playlistDisplay">
        {songList.songs.map((song) => (
            <SongDisplay info={song} key={song.id}/>
        ))}
        </section>;
}