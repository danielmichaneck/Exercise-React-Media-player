import { ReactElement } from "react";

import "./Player.css";

export function PlayerOptions(): ReactElement {
    return <div className="player-options">
        <span className="material-symbols-outlined playerAddCircle"> repeat </span>
        <span className="material-symbols-outlined playerAddCircle"> skip_previous </span>
        <span className="material-symbols-outlined playerAddCircle play-arrow"> play_arrow </span>
        <span className="material-symbols-outlined playerAddCircle"> skip_next </span>
        <span className="material-symbols-outlined playerAddCircle"> shuffle </span>
    </div>
}