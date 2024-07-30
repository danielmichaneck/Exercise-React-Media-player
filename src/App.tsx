import { PlaylistDisplay } from "./components/Playlist/PlaylistDisplay.tsx";
import { Header } from "./components/Header/Header.tsx";
import { Player } from "./components/Player/Player.tsx";
import { ISongInformation } from "./interfaces.tsx";
import { songList } from "./data.ts";

import "./data.ts";
import "./components/Content.css";

let currentSong: ISongInformation = songList.songs[3];

export function App() {
  return (
    <main>
      <section className="content">
        <Header/>
        <Player info={currentSong}/>
        <PlaylistDisplay/>
      </section>
    </main>
  );
}