import { ReactElement } from "react";
import { ISongInformation } from "../../interfaces";
import { PlayerImage } from "./PlayerImage";
import { PlayerSongContainer } from "./PlayerSongContainer";

import "./Player.css";

interface IPlayerProps {
    info: ISongInformation;
}

export function Player({info}: IPlayerProps): ReactElement {
    return <div className="player">
        <PlayerImage path={info.image}/>
        <PlayerSongContainer artist={info.artist} title={info.title}/>
    </div>
}