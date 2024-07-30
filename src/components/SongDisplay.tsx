import { ReactElement } from "react";
import { ISongInformation } from "../interfaces";

import "./SongDisplay.css";

interface ISongDisplayProps {
    info: ISongInformation;
}

export function SongDisplay({info}: ISongDisplayProps): ReactElement {
    let songDuration = Math.floor(info.duration / 60) + ":" + (info.duration % 60);
    if (info.duration % 60 < 10) songDuration = Math.floor(info.duration / 60) + ":0" + (info.duration % 60);

    return <div className="songDisplay">
        <img src={info.image} className="songImage"></img>
        <div className="songDisplayArtist">{info.artist}</div>
        <div className="songDisplayTitle">{info.title}</div>
        <div className="songDisplayDuration">{songDuration}</div>
    </div>;
}

