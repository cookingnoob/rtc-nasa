import { useState, useEffect } from "react";
import { ROVER_CALENDAR } from '../api/api-key'

const Calendar = ({ setUrl, url }) => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);

  const [date, setDate] = useState(today);

  const manageDates = (event) => {
    const newDate = event.target.value;
    setDate(newDate);
  };

  useEffect(() => {
    if (url.includes('rovers/curiosity/latest_photos')) {
      const changeRoverToCalendar = `${ROVER_CALENDAR}${date}`
      setUrl(changeRoverToCalendar)
      console.log('si se cambio la url a la correcta')
    }

    const deleteUrlDate = url.slice(0, -10);
    const newUrlDate = `${deleteUrlDate}${date}`
    setUrl(newUrlDate);

  }, [date]);

  return (
    <form action="">
      <label htmlFor="date" className="calendar-label">Choose a picture of the day: </label>
      <input type="date" name="date" id="date" className='calendar' value={date} onInput={manageDates} max={today} />
    </form>
  )
}

export default Calendar