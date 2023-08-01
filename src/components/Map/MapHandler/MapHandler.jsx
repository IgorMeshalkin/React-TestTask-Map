import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useMap} from "react-leaflet";
import {getCenterByRoute, getZoomByRoute} from "../../../utils/map";

//компонент для управления картой, центрирования и изменения масштаба.
const MapHandler = () => {
    const currentRoute = useSelector(state => state.currentRoute.route)
    const map = useMap();

    useEffect(() => {
        if (currentRoute.id) {
            map.setView(getCenterByRoute(currentRoute), getZoomByRoute(currentRoute))
        }
    }, [currentRoute, map])
};

export default MapHandler;