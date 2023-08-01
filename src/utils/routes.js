export const getRoutes = () => {
    return [
        {
            id: 1,
            name: 'Маршрут 1',
            point1: [59.84660399, 30.29496392],
            point2: [59.82934196, 30.42423701],
            point3: [59.83567701, 30.38064206]
        },
        {
            id: 2,
            name: 'Маршрут 2',
            point1: [59.82934196, 30.42423701],
            point2: [59.82761295, 30.41705607],
            point3: [59.84660399, 30.29496392]
        },
        {
            id: 3,
            name: 'Маршрут 3',
            point1: [59.83567701, 30.38064206],
            point2: [59.84660399, 30.29496392],
            point3: [59.82761295, 30.41705607]
        }
    ]
}

//возвращает строку содержащую точки маршрута в формате необходимом для вставки в http запрос
export const getPointsString = (route) => {
    return String(route.point1[1]) + ',' + String(route.point1[0])
        + ';' + String(route.point2[1]) + ',' + String(route.point2[0]) + ';'
        + String(route.point3[1]) + ',' + String(route.point3[0]);
}
