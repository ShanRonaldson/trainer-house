import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction';

export const Calendar = () => {

    const [events, setEvents] = useState([{
        start: new Date(),
        end: new Date(),
        title: ''
    }])

    //get the customer & trainings data

    useEffect(() => {
        fetch(process.env.REACT_APP_TRAININGS_URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            }).then(responseData => {
                let data = [];
                responseData.map(item =>
                    data.push(
                        {
                            start: item.date,
                            end: (item.date * 60000),
                            title: item.activity
                        }
                    )
                )

                setEvents({ events: data })
            }).catch(err => console.error(err))
    }, [])



    return (
        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            height={600}
            events={events}
            headerToolbar={{
                start: 'prev, next, today',
                center: 'title',
                end: 'dayGridMonth, dayGridWeek, dayGridDay'
            }}
        />
    )

}