'use client'
import React from "react"

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function CalendarFull(){
    let  events = [
        {
            title: 'Business Lunch',
            start: '2022-04-03T13:00:00',
            constraint: 'businessHours'
        },
        {
            title: 'Meeting',
            start: '2022-04-13T11:00:00',
            constraint: 'availableForMeeting',
            color: '#53c797'
        },
        {
            title: 'Conference',
            start: '2022-04-18',
            end: '2022-04-20'
        },
        {
            title: 'Party',
            start: '2022-04-29T20:00:00'
        },
    ]
    return(
        <div id="calendar-container" className="card rounded border-0 shadow p-4">
            <div id="calendar"></div>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                weekends={true}
                events={events}
                headerToolbar= {{
                    left: 'prev,next today addEventButton',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay',
                }}
                customButtons={
                    {
                        addEventButton : {
                            text:'Add Event',
                            click : function (){
                                var dateStr = prompt('Enter a date in YYYY-MM-DD format');
                            }
                        }
                    }
                    }
            />
        </div>
    )
}