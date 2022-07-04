const bookingData = [
    {
        "id": 1,
        "roomId": "A101",
        "startTime": "2019-09-28 13:00:00",
        "endTime": "2019-09-28 14:00:00",
        "title": "Lunch with Petr"
    },
    {
        "id": 2,
        "roomId": "A101",
        "startTime": "2019-09-28 14:00:00",
        "endTime": "2019-09-28 15:00:00",
        "title": "Sales Weekly Meeting"
    },
    {
        "id": 3,
        "roomId": "A101",
        "startTime": "2019-09-28 16:00:00",
        "endTime": "2019-09-28 18:00:00",
        "title": "Anastasia Website Warroom"
    },
    {
        "id": 4,
        "roomId": "A101",
        "startTime": "2019-09-29 13:00:00",
        "endTime": "2019-09-29 14:00:00",
        "title": "One-on-One Session"
    },
    {
        "id": 5,
        "roomId": "A101",
        "startTime": "2019-09-29 16:00:00",
        "endTime": "2019-09-29 18:00:00",
        "title": "UGC Sprint Planning"
    },
    {
        "id": 6,
        "roomId": "A102",
        "startTime": "2019-09-30 09:00:00",
        "endTime": "2019-10-04 18:00:00",
        "title": "5-Day Design Sprint Workshop"
    },
    {
        "id": 7,
        "roomId": "Auditorium",
        "startTime": "2019-09-19 09:00:00",
        "endTime": "2019-09-23 19:00:00",
        "title": "Thai Tech Innovation 2019"
    },
    {
        "id": 8,
        "roomId": "A101",
        "startTime": "2019-09-28 10:00:00",
        "endTime": "2019-09-28 13:00:00",
        "title": "Raimonland project"
    },
    {
        "id": 9,
        "roomId": "A102",
        "startTime": "2019-09-30 18:00:00",
        "endTime": "2019-09-30 20:00:00",
        "title": "Management Meetinng"
    },
    {
        "id": 10,
        "roomId": "A101",
        "startTime": "2019-10-04 14:00:00",
        "endTime": "2019-10-06 11:00:00",
        "title": "3-day workshop Corgi costume"
    }
];


const checkAvailability = (roomId, startTime, endTime) => {
    //convert received data
    const checkRoom = bookingData.filter(item => item.roomId === roomId);
    const checkIn = new Date(startTime).getTime();
    const checkOut = new Date(endTime).getTime();

    console.log(`checkIn : ${checkIn}, checkOut : ${checkOut}`)

    //Check roomId in Data
    if (bookingData.find(e => e.roomId === roomId)) {
        //Check that the dates are in the correct order.
        if (checkIn >= checkOut) {
            return false;
        }
        //check room availability
        for (const x of checkRoom) {
            if (new Date(x.startTime).getTime() < checkOut && new Date(x.endTime).getTime() > checkIn) {
                return false;
                // return console.log(`roomId : ${x.roomId}, id : ${x.id}`); //If need to know roomId and id for check in bookingData
            }
        }
        return true;
    }
    return false;
}
checkAvailability("A102", "2019-09-28 15:00:00", "2019-09-28 16:00:00");