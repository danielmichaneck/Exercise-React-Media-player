import { ReactElement } from "react";
import { PlayerSongInformation } from "./PlayerSongInformation";

import "./Player.css";

interface IPlayerSongContainerProps {
    artist: string,
    title: string
}

export function PlayerSongContainer({artist, title}: IPlayerSongContainerProps): ReactElement {
    return <div className="playerSongContainer">
        <span className="material-symbols-outlined playerAddCircle"> add_circle </span>
        <PlayerSongInformation artist={artist} title={title}/>
        <span className="material-symbols-outlined playerFavorite"> favorite </span>
    </div>
}