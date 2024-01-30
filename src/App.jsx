import React, { useState, useEffect } from 'react'
import moment from "moment-timezone"
import axios from 'axios';
import Calendar from './components/Calendar';
import WeeklyNavigation from './components/WeeklyNavigation'


const App = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedTimezone, setSelectedTimezone] = useState('UTC-0');
  const [scheduleData, setScheduleData] = useState([]);

  const goToPreviousWeek = () => {
    setCurrentDate((prevDate) => prevDate.clone().subtract(1, 'week'));
  };

  const goToNextWeek = () => {
    setCurrentDate((prevDate) => prevDate.clone().add(1, 'week'));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('./data.json');
        setScheduleData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <WeeklyNavigation currentDate={currentDate} setCurrentDate={setCurrentDate} selectedTimezone={selectedTimezone} setSelectedTimezone={setSelectedTimezone} goToPreviousWeek={goToPreviousWeek} goToNextWeek={goToNextWeek} />
      <Calendar currentDate={currentDate} selectedTimezone={selectedTimezone} scheduleData={scheduleData} />
    </>
  )
}

export default App
