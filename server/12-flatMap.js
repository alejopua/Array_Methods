const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};

const obj = [
    {name: 'Jhon', age: 30},
    {name: 'Jane', age: 25},
    {name: 'Jim', age: 28}
]

const rta = Object.values(calendars).flatMap(item => item.map(i => i.startDate))
console.log(rta);
