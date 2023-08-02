import React from 'react';
import {useSelector} from "react-redux";
import {MapContainer, Marker, Polyline, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import MapHandler from "./MapHandler/MapHandler";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MyMap = () => {
    //центр карты по умолчанию
    const startPosition = [59.942952, 30.323713];
    //текущий маршрут, тот который выбран в таблице
    const currentRoute = useSelector(state => state.currentRoute.route)
    //объект содержащий массив точек маршрута для polyline и флаг о том загружается новый массив в данный момент или нет.
    const routeLine = useSelector(state => state.routeLine.routeLine)

    return (<div>
        <MapContainer center={startPosition} zoom={12} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MapHandler/>

            {!routeLine.isLoading &&
                <Polyline
                    pathOptions={{color: '#36b030'}}
                    positions={routeLine.pointsArray}
                />
            }

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