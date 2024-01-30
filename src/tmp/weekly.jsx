import React, { useState } from 'react'
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
// import axios from 'axios';


const WeeklyNavigation = ({ currentDate, setCurrentDate, selectedTimezone, setSelectedTimezone, goToPreviousWeek, goToNextWeek, scheduleData, setScheduleData, setUnixTimeStamp }) => {
    const [availableTimezones] = useState(['UTC-0', 'America/New_York', 'Europe/London']);

    // function convertUnixTimeToFormattedDate(unixTime) {
    //     const date = new Date(unixTime * 1000);

    //     const options = {
    //         year: 'numeric',
    //         month: 'long',
    //         day: 'numeric',
    //         hour: 'numeric',
    //         minute: 'numeric',
    //         second: 'numeric',
    //         timeZoneName: 'short',
    //     };
    //     const formattedDate = date.toLocaleString('en-US', options);
    //     return formattedDate;
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [currentDate, selectedTimezone]);

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get('http://api.timezonedb.com/v2.1/list-time-zone', {
    //             params: {
    //                 key: 'JI715ZRCBC6A',
    //                 format: 'json',
    //                 by: 'zone',
    //                 zone: selectedTimezone,
    //                 // time: currentDate.unix(),
    //             },
    //         });
    //         console.log(response.data.zones[0].timestamp)
    //         const unixTime = response.data.zones[0].timestamp
    //         const formattedDate = convertUnixTimeToFormattedDate(unixTime);

    //         console.log(formattedDate);
    //         setUnixTimeStamp(unixTime)
    //         setScheduleData(formattedDate);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

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