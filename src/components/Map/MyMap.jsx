import React from 'react';
import {useSelector} from "react-redux";
import {MapContainer, Marker, TileLayer} from "react-leaflet";
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
    const startPosition = [59.83, 30.35];
    const currentRoute = useSelector(state => state.currentRoute.route)

    // const polyline = [[59.983762, 30.311365], [59.984981, 30.345867], [59.984981, 30.345867],]

    return (<div>
        <MapContainer center={startPosition} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MapHandler/>

            {/*<Polyline*/}
            {/*    pathOptions={{color: '#800000'}}*/}
            {/*    positions={polyline}*/}
            {/*/>*/}

            {currentRoute.id && <>
                <Marker position={currentRoute.point1}/>
                <Marker position={currentRoute.point2}/>
                <Marker position={currentRoute.point3}/>
            </>}

            {/*<Marker position={[50, 29.80]}>*/}
            {/*    <Popup>*/}
            {/*        -4*/}
            {/*    </Popup>*/}
            {/*</Marker>*/}
            {/*<Marker position={[50, 29.85]}>*/}
            {/*    <Popup>*/}
            {/*        -3*/}
            {/*    </Popup>*/}
            {/*</Marker>*/}
            {/*<Marker position={[50, 29.90]}>*/}
            {/*    <Popup>*/}
            {/*        -2*/}
            {/*    </Popup>*/}
            {/*</Marker>*/}
            {/*<Marker position={[50, 29.95]}>*/}
            {/*    <Popup>*/}
            {/*        -1*/}
            {/*    </Popup>*/}
            {/*</Marker>*/}
            {/*<Marker position={[50, 30]}>*/}
            {/*    <Popup>*/}
            {/*        Центр*/}
            {/*    </Popup>*/}
            {/*</Marker>*/}
            {/*<Marker position={[50, 30.05]}>*/}
            {/*    <Popup>*/}
            {/*        +1*/}
            {/*    </Popup>*/}
            {/*</Marker>*/}
            {/*<Marker position={[50, 30.1]}>*/}
            {/*    <Popup>*/}
            {/*        +2*/}
            {/*    </Popup>*/}
            {/*</Marker>*/}
            {/*<Marker position={[50, 30.15]}>*/}
            {/*    <Popup>*/}
            {/*        +3*/}
            {/*    </Popup>*/}
            {/*</Marker>*/}
            {/*<Marker position={[50, 30.20]}>*/}
            {/*    <Popup>*/}
            {/*        +4*/}
            {/*    </Popup>*/}
            {/*</Marker>*/}
        </MapContainer>
    </div>);
};

export default MyMap;