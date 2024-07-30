import { ReactElement } from "react";

import "./Player.css";

interface IPlayerSongInformationProps {
    artist: string,
    title: string
}

export function PlayerSongInformation({artist, title}: IPlayerSongInformationProps): ReactElement {
    return <div className="playerSongInformation">
        <p className="playerArtist">{artist}</p>
        <p className="playerTitle">{title}</p>
    </div>
}