import { ReactElement } from "react";
import { ISongInformation } from "../interfaces";

interface ISongDisplayProps {
    info: ISongInformation;
}

export function SongDisplay({info}: ISongDisplayProps): ReactElement {
    return <p>
        {info.title}
        {info.artist}
        </p>;
}