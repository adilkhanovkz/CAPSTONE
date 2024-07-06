import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  // Step 2: Declare state variables for form fields and available times
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [gnum, setGNum] = useState('');
  const [guestNum, setGuestNum] = useState(['1','2','3','4','5','6','7','8']);
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00'
  ]);

  // Step 3: Handle change events for form fields
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGNum = (e) => {
    setGNum(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Date:', date);
    console.log('Time:', time);
  };

  return (
    <form  onSubmit={handleSubmit}>
      <label htmlFor="res-date"><h5>Choose date:</h5></label>
      <input 
        type="date" 
        id="res-date" 
        value={date} 
        onChange={handleDateChange} 
      />

      <label htmlFor="res-time"><h5>Choose time:</h5></label>
      <select 
        id="res-time" 
        value={time} 
        onChange={handleTimeChange}
      >
        {availableTimes.map((availableTime, index) => (
          <option key={index} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      <label><h5>Number of guests:</h5></label>
      <chose 
        id="res-num" 
        value={gnum}
        onChange={handleGNum}
      >
        {guestNum.map((num, index) => (
          <option key={index} value={num}>
            {num}
          </option>
        ))}
      </chose>
      <button class='big-button' type='submit'><h3>Submit</h3></button>
    </form>
  );
};

export default BookingForm;