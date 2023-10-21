import { areIntervalsOverlapping } from 'date-fns'

const numbers = [3, 7, 9, 1, 11, 12];

let rta = false;
for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    if (item % 2 === 0) {
        rta = true;
        break;
    }
}
console.log(rta);
console.log('------------------');

const rta2 = numbers.some((item) => item % 2 === 0);
console.log("rta2", rta2);

const orders = [
    {
        customerName: "Pablo",
        total: 10,
        delivered: false,
    },
    {
        customerName: "Ana",
        total: 160,
        delivered: false,
    },
    {
        customerName: "Catalina",
        total: 40,
        delivered: false,
    },
    {
        customerName: "Galina",
        total: 90,
        delivered: false,
    },
    {
        customerName: "Carolina",
        total: 352,
        delivered: true,
    },
    ];

    const rta3 = orders.some((item) => item.delivered);
    console.log("rta3", rta3);

    const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de amigos",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita compras",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cine",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
};

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
}

console.log('isOverlap', isOverlap(newAppointment));