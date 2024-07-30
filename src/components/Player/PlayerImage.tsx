import { ReactElement } from "react";

interface IPlayerImageProps {
    path: string,
    altText?: string
}

export function PlayerImage(props: IPlayerImageProps): ReactElement {
    return <figure className="playerFigure">
        <img src={props.path} alt={props.altText} className="playerImage"/>
    </figure>
}