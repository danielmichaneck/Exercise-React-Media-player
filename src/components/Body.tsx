import { ReactElement } from "react";
import { Header } from "./Header";
import { Player } from "./Player";
import { PlaylistDisplay } from "./PlaylistDisplay";
import { ISongInformation } from "../interfaces";
import { songList } from "../data";

import "./Body.css";

let currentSong: ISongInformation = songList.songs[3];

export function Body(): ReactElement {
    return <section className="body">
        <Header/>
        <Player info={currentSong}/>
        <PlaylistDisplay/>
    </section>
}