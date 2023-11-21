// Name Generator for file downloads
// Copywrite (c) 2023 by tushgaurav.in

export const timeStamp = () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
}

export const VideoFileNameGen = () => {
    const name = `RoboLensVideo-${timeStamp()}`;
    return name;
}

export const ImageFileNameGen = () => {
    const name = `RoboLensImage-${timeStamp()}`;
    return name;
}