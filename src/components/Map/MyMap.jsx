import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {MapContainer, Marker, Polyline, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import MapHandler from "./MapHandler/MapHandler";
import axios from "axios";
import {getPointsString} from "../../utils/routes";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MyMap = () => {
    const startPosition = [59.942952, 30.323713]; //центр карты по умолчанию
    const polyline = require('polyline'); //объект для декодирования polyline из запроса

    const currentRoute = useSelector(state => state.currentRoute.route)
    const [routeLine, setRouteLine] = useState([]); //координаты маршрута для отображения на карте

    //при каждом изменении текущего маршрута, запрашивает его через API OSRM и отрисовывает на карте.
    useEffect(() => {
        if (currentRoute.id) {
            axios.get('http://router.project-osrm.org/route/v1/driving/' + getPointsString(currentRoute) + '?overview=full')
                .then(res => {
                    setRouteLine(polyline.decode(res.data.routes[0].geometry))
                })
        }
    }, [currentRoute, polyline])

    return (<div>
        <MapContainer center={startPosition} zoom={12} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MapHandler/>

            <Polyline
                pathOptions={{color: '#36b030'}}
                positions={routeLine}
            />

            {currentRoute.id && <>
                <Marker position={currentRoute.point1}>
                    <Popup>
                        Точка 1
                    </Popup>
                </Marker>
                <Marker position={currentRoute.point2}>
                    <Popup>
                        Точка 2
                    </Popup>
                </Marker>
                <Marker position={currentRoute.point3}>
                    <Popup>
                        Точка 3
                    </Popup>
                </Marker>
            </>}
        </MapContainer>
    </div>);
};

export default MyMap;