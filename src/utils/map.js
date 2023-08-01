export const getCenterByRoute = (route) => {
    const sortedPointsArray = getSortedArrays(route);
    let lonSum = sortedPointsArray[0][0] + sortedPointsArray[0][2];
    let latSum = sortedPointsArray[1][0] + sortedPointsArray[1][2];
    return [lonSum / 2, latSum / 2]
}

export const getZoomByRoute = (route) => {
    const sortedPointsArray = getSortedArrays(route);
    const lonDifferent = sortedPointsArray[0][2] - sortedPointsArray[0][0];
    const latDifferent = sortedPointsArray[1][2] - sortedPointsArray[1][0];
    const maxDifferent = Math.max(lonDifferent, latDifferent);

    let zoom = 0;
    if (maxDifferent < 0.016) {
        zoom = 15;
    } else if (maxDifferent >= 0.016 && maxDifferent < 0.035) {
        zoom = 14;
    } else if (maxDifferent >= 0.035 && maxDifferent < 0.07) {
        zoom = 13;
    } else if (maxDifferent >= 0.07 && maxDifferent < 0.14) {
        zoom = 12
    } else if (maxDifferent >= 0.14 && maxDifferent < 0.26) {
        zoom = 11;
    } else if (maxDifferent >= 0.26 && maxDifferent < 0.6) {
        zoom = 10;
    } else {
        zoom = 9
    }
    return zoom;
}

const getSortedArrays = (route) => {
    const lonArray = [route.point1[0], route.point2[0], route.point3[0]].sort((a, b) => a - b)
    const latArray = [route.point1[1], route.point2[1], route.point3[1]].sort((a, b) => a - b)
    return [lonArray, latArray]
}