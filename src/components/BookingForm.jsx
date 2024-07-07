import React, { useState, useReducer,useRef  } from 'react';
import './BookingForm.css';
import { getToday, getWeekFromToday } from '../utils';



const BookingForm = (props) => {
  // Step 2: Declare state variables for form fields and available times
  const [date, setDate] = useState(getToday());
  const [time, setTime] = useState('');
  const [gnum, setGNum] = useState('1');
  const [occasion, setOccasion] = useState('');
  
  const occasions = ['Birthday', 'Aniversary', 'Engagement'];

  // Step 3: Handle change events for form fields
  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value)
    props.dispatchAvailableTimes(newDate);
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
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
      <div className='form-input'>
        <label htmlFor="res-date"><h5>Choose date:</h5></label>
        <input
          type="date" 
          id="res-date" 
          name="date"
          value={date} 
          onChange={handleDateChange} 
          min={getToday()}
          max={getWeekFromToday()}
        />
      </div>

      <div className='form-input'>
      <label htmlFor="res-time"><h5>Choose time:</h5></label>
      <select 
        id="res-time" 
        value={time} 
        onChange={handleTimeChange}
      >
        {props.availableTimes.map((availableTime, index) => (
          <option key={index} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      </div>

      <div className='form-input'>
      <label><h5>Number of guests:</h5></label>
      <input
      type="number"
        id="res-num" 
        value={gnum}
        onChange={handleGNum}
        min={1}
        max={10}
        placeholder='1'
      />
       </div>

      <div className='form-input'>
      <label htmlFor="res-time"><h5>Occasion:</h5></label>
      <select 
        id="res-occasion" 
        value={occasion} 
        onChange={handleOccasionChange}
      >
        {occasions.map((occasion, index) => (
          <option key={index} value={occasion}>
            {occasion}
          </option>
        ))}
      </select>
      </div>

       <div className='button'>
      <button id='bookSubmit' class='big-button' type='submit'><h3>Submit</h3></button>
      </div>
    </form>
    
  );
};

export default BookingForm;

