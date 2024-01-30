import React from 'react';
import moment from "moment-timezone";

function Calendar({ currentDate, selectedTimezone, scheduleData }) {

    
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

        // Check if the time is in the scheduleData
        const isBusy = scheduleData.some(item => {
          const itemDate = moment(item.Date + ' ' + item.Time, 'YYYY-MM-DD HH:mm').tz(timezone_name);
          return itemDate.isSame(timezone_date.clone().startOf('hour').add(hour, 'hours'), 'hour');
        });

        times.push(
          <label key={formattedTime} className={`m-2 ${isBusy ? 'busy' : ''}`}>
            <input type="checkbox" checked={isBusy} readOnly />
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
        <div className="container-fluid p-4">
            {renderWeekDays()}
        </div>
    );
}

export default Calendar;
