import { ISongList } from "./interfaces"

import img1 from "./assets/Images/1.jpg";
import img2 from "./assets/Images/2.jpg";
import img3 from "./assets/Images/3.jpg";
import img4 from "./assets/Images/4.jpg";
import img5 from "./assets/Images/5.jpg";
import img6 from "./assets/Images/6.jpg";
import img7 from "./assets/Images/7.jpg";
import img8 from "./assets/Images/8.jpg";

export const images: string[] = [
    img1, img2, img3, img4, img5, img6, img7, img8
]

export const songList: ISongList = {
    id: "list",
    songs: [
        {
            id: "song1",
            artist: "Big rabbit",
            duration: 180,
            image: img1,
            title: "Bunny chant"
        },
        {
            id: "song2",
            artist: "robo",
            duration: 185,
            image: img2,
            title: "ones and zeroes"
        },
        {
            id: "song3",
            artist: "Lizz",
            duration: 190,
            image: img3,
            title: "Scale blues"
        },
        {
            id: "song4",
            artist: "Sprite!",
            duration: 204,
            image: img4,
            title: "Just a little guy"
        },
        {
            id: "song5",
            artist: "Cat5",
            duration: 445,
            image: img5,
            title: "Vengeance"
        },
        {
            id: "song6",
            artist: "L1ght",
            duration: 123,
            image: img6,
            title: "Redemption"
        },
        {
            id: "song7",
            artist: "Robin",
            duration: 345,
            image: img7,
            title: "Sound of nothing"
        },
        {
            id: "song8",
            artist: "Robin",
            duration: 265,
            image: img8,
            title: "What you gonna do"
        },
    ]
}