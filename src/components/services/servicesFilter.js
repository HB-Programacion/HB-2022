import { imagesHome, imagesQuickly } from "../data/imagesHome"

export function getImagesHome() {
    const imagesHomeList = imagesHome;
    return imagesHomeList;
}

export function getImagesQuickly() {
    const imagesQuicklyList = imagesQuickly;
    return imagesQuicklyList;
}

export function filterHomeType(homeType) {
    let filtredHomeType= getImagesHome().filter(tipo => tipo.type === homeType);
    return filtredHomeType;
}