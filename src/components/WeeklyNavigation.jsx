import React, { useState } from 'react'
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";


const WeeklyNavigation = ({ currentDate, setCurrentDate, selectedTimezone, setSelectedTimezone, goToPreviousWeek, goToNextWeek }) => {
    const [availableTimezones] = useState(['UTC-0', 'America/New_York', 'Europe/London']);


    const handleTimezoneChange = (event) => {
        setSelectedTimezone(event.target.value);
    };

    return (
        <>
            <div className="container-fluid pt-2">
                <div className="p-2 border border-dark row">
                    <div className="col-4 text-center">
                        <button
                            className='border-0 bg-white text-primary'
                            onClick={goToPreviousWeek}
                        ><FaCaretLeft size={20} />Previous Week</button>
                    </div>
                    <div className="col-4 text-center">
                        <h6>{currentDate.format('MMMM D, YYYY')}</h6>
                    </div>

                    <div className="col-4 text-center">
                        <button
                            className='border-0 bg-white text-primary'
                            onClick={goToNextWeek}
                        >Next Week<FaCaretRight size={20} /></button>
                    </div>
                </div>
            </div>
            <div className='py-2 px-3 d-flex flex-column'>
                <label className='py-2 px-1'>Timezone:</label>
                <select className='p-2 rounded' value={selectedTimezone} onChange={handleTimezoneChange}>
                    {availableTimezones.map((timezone) => (
                        <option key={timezone} value={timezone}>
                            {timezone}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default WeeklyNavigation

