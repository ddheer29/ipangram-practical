import React from 'react';
import moment from "moment-timezone";

function Calendar({ currentDate, selectedTimezone , scheduleData, setScheduleData}) {

    const renderWeekDays = () => {
        const days = [];

        for (let i = 0; i < 7; i++) {
            const day = currentDate.clone().startOf('week').add(i, 'days');

            const times = [];
            const date = moment(day.format('YYYY-MM-DD'));
            const timezone_name = selectedTimezone;

            // Set timezone
            const timezone_date = date.tz(timezone_name);
            for (let hour = 0; hour < 24; hour++) {
                const formattedTime = timezone_date.clone().startOf('hour').add(hour, 'hours').format("HH:mm");
                times.push(
                    <label key={formattedTime} className="m-2">
                        <input type="checkbox" />
                        <span className="checkmark" /> {formattedTime}
                    </label>
                );
            }

            days.push(
                <div className="row" key={day.format('YYYY-MM-DD')}>
                    <div className="col-sm-2 col-4">
                        <p className='text-danger'>{day.format('dddd')}</p>
                        <p>{day.format('MM/DD')}</p>
                    </div>
                    <div className="col-sm-10 col-8">
                        {times}
                    </div>
                </div>
            );
        }
        return days;
    };

    return (
        <div className="container-fluid p-4">
            {renderWeekDays()}
        </div>
    );
}

export default Calendar;
