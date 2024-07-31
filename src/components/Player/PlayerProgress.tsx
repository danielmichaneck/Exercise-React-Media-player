import { ReactElement } from "react";
import { durationConversion } from "../../durationConversion";
import { PlayerProgressBar } from "./PlayerProgressBar";

import "./Player.css";

let currentProgress: number = 99;

interface PlayerProgressProps {
    duration: number;
}

export function PlayerProgress({duration}: PlayerProgressProps): ReactElement {
    let songDuration = Math.floor(duration / 60) + ":" + (duration % 60);
    if (duration % 60 < 10) songDuration = Math.floor(duration / 60) + ":0" + (duration % 60);

    return <div className="playerProgress">
        <p className="currentProgress">{durationConversion(currentProgress)}</p>
        <PlayerProgressBar ratio={currentProgress/duration}/>
        <p className="progressDuration">{durationConversion(duration)}</p>
    </div>
}