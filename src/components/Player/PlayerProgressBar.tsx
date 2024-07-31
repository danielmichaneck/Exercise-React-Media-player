import { ReactElement } from "react";

import "./Player.css";

interface PlayerProgressBarProps {
    ratio: number;
}

export function PlayerProgressBar({ratio}: PlayerProgressBarProps): ReactElement {
    const progress = {
        width: ratio * 100 + "%"
    }

    return <div className="progressBar">
        <span className="progressBarBg"/>
        <span className="progressBarTop" style={progress}/>
    </div>;
}