import { Body } from "./components/Body.tsx";
import { PlaylistDisplay } from "./components/PlaylistDisplay.tsx";
import { SongDisplay } from "./components/SongDisplay";

import "./data.ts";
import { songList } from "./data.ts";

export function App() {
  return (
    <>
      <main>
        <Body/>
      </main>
    </>
  );
}
