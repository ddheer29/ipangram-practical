import React, { useState } from 'react'
import WeeklyNavigation from './components/WeeklyNavigation'
import Calander from './components/Calander'
import moment from "moment-timezone"


const App = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedTimezone, setSelectedTimezone] = useState('UTC-0');
  


  const goToPreviousWeek = () => {
    setCurrentDate((prevDate) => prevDate.clone().subtract(1, 'week'));
  };

  const goToNextWeek = () => {
    setCurrentDate((prevDate) => prevDate.clone().add(1, 'week'));
  };


  return (
    <>
      <WeeklyNavigation currentDate={currentDate} setCurrentDate={setCurrentDate} selectedTimezone={selectedTimezone} setSelectedTimezone={setSelectedTimezone} goToPreviousWeek={goToPreviousWeek} goToNextWeek={goToNextWeek}  />
      <Calander currentDate={currentDate} goToPreviousWeek={goToPreviousWeek} goToNextWeek={goToNextWeek} selectedTimezone={selectedTimezone} setSelectedTimezone={setSelectedTimezone}/>
    </>
  )
}

export default App
