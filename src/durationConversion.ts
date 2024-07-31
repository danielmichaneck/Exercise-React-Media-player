export function durationConversion(duration: number) {
    let songDuration = Math.floor(duration / 60) + ":" + (duration % 60);
    if (duration % 60 < 10) songDuration = Math.floor(duration / 60) + ":0" + (duration % 60);
    return songDuration;
}