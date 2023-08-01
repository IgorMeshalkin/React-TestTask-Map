import React from 'react';
import './Table.css'
import {useDispatch, useSelector} from "react-redux";
import {selectRoute} from "../../store/currentRouteSlice";

const Table = () => {
    const routeList = useSelector(state => state.routeList.routeList)
    const currentRoute = useSelector(state => state.currentRoute.route)
    const dispatch = useDispatch();

    //делает выбранный маршрут активным
    const selectThisRoute = (route) => dispatch(selectRoute(route));

    return (<div>
        <div className="tableTitle">Доступные маршруты</div>
        <table>
            <thead>
            <tr>
                <th translate={"no"}>Маршрут</th>
                <th translate={"no"}>Точка 1 (Lat, Ing)</th>
                <th translate={"no"}>Точка 2 (Lat, Ing)</th>
                <th translate={"no"}>Точка 3 (Lat, Ing)</th>
            </tr>
            </thead>
            <tbody>
            {
                routeList.map(route =>
                <tr key={route.id}
                    className={currentRoute.id === route.id ? "bodyTr active" : "bodyTr"}
                    onClick={() => selectThisRoute(route)}>
                    <td>{route.name}</td>
                    <td>
                        <div className="pointsContainer">
                            <span>{route.point1[0]}</span>
                            <span>{route.point1[1]}</span>
                        </div>
                    </td>
                    <td>
                        <div className="pointsContainer">
                            <span>{route.point2[0]}</span>
                            <span>{route.point2[1]}</span>
                        </div>
                    </td>
                    <td>
                        <div className="pointsContainer">
                            <span>{route.point3[0]}</span>
                            <span>{route.point3[1]}</span>
                        </div>
                    </td>
                </tr>
                )
            }
            </tbody>
        </table>
    </div>);
};

export default Table;