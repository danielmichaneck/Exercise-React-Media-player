import { ReactElement } from "react";
import { Header } from "./Header";
import { Player } from "./Player";
import { PlaylistDisplay } from "./PlaylistDisplay";

import "./Body.css";

export function Body(): ReactElement {
    return <section className="body">
        <Header/>
        <Player/>
        <PlaylistDisplay/>
    </section>
}