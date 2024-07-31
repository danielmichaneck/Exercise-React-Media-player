import { ReactElement } from "react";
import { ISongInformation } from "../../interfaces";
import { durationConversion } from "../../durationConversion";

import "./SongDisplay.css";

interface ISongDisplayProps {
    info: ISongInformation;
}

export function SongDisplay({info}: ISongDisplayProps): ReactElement {
    return <div className="songDisplay">
        <img src={info.image} className="songImage"></img>
        <div className="songDisplayArtist">{info.artist}</div>
        <div className="songDisplayTitle">{info.title}</div>
        <div className="songDisplayDuration">{durationConversion(info.duration)}</div>
    </div>;
}