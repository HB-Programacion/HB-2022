import { imagesHome, imagesQuickly, dataService } from "../data/imagesHome"

export function getImagesHome() {
    const imagesHomeList = imagesHome;
    return imagesHomeList;
}

export function getImagesQuickly() {
    const imagesQuicklyList = imagesQuickly;
    return imagesQuicklyList;
}

export function getDataServices() {
    const dataServiceList = dataService;
    return dataServiceList;
}

export function filterHomeType(homeType) {
    let filtredHomeType= getImagesHome().filter(tipo => tipo.type === homeType);
    return filtredHomeType;
}

export function filterServiceType(serviceType) {
    let filtredServiceType= getDataServices().filter(tipo => tipo.service === serviceType);
    return filtredServiceType;
}

export function filterQuicklyType(homeType) {
    let filtredHomeType= getImagesQuickly().filter(tipo => tipo.type === homeType);
    return filtredHomeType;
}