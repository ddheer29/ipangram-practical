import React, { useState } from 'react';
import moment from "moment-timezone"


function Calendar({ currentDate, setCurrentDate, goToPreviousWeek, goToNextWeek, scheduleData, setScheduleData }) {
    // const goToPreviousWeek = () => {
    //     setCurrentDate((prevDate) => prevDate.clone().subtract(1, 'week'));
    // };

    // const goToNextWeek = () => {
    //     setCurrentDate((prevDate) => prevDate.clone().add(1, 'week'));
    // };


    const renderWeekDays = () => {
        const days = [];

        for (let i = 0; i < 7; i++) {
            const day = currentDate.clone().startOf('week').add(i, 'days');

            const times = [];
            for (let hour = 0; hour < 24; hour++) {
                const formattedTime = moment(day).set({ hour, minute: 0 }).format('HH:mm');
                times.push(
                    <label key={formattedTime} className="m-2">
                        <input type="checkbox" />
                        <span className="checkmark" /> {formattedTime}
                    </label>
                );
            }

            days.push(
                <div className="row" key={day.format('YYYY-MM-DD')}>
                    <div className="col-1">
                        <p className='text-danger'>{day.format('dddd')}</p>
                        <p>{day.format('MM/DD')}</p>
                    </div>
                    <div className="col-11">
                        {times}
                    </div>
                </div>
            );
        }
        return days;
    };

    return (
        <div>
            <div className="container-fluid p-4">
                {renderWeekDays()}
            </div>
        </div>
    );
}

export default Calendar;
