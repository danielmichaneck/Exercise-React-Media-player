import { ReactElement } from "react";
import { ISongInformation } from "../interfaces";
import { images } from "../data"

import "./Player.css";

interface IPlayerProps {
    info: ISongInformation;
}

export function Player({info}: IPlayerProps): ReactElement {
    return <div className="player">
        <img src={info.image} className="playerImage"/>
        <p className="playerArtist">{info.artist}</p>
        <p className="playerTitle">{info.title}</p>
    </div>
}