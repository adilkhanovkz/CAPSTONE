import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

import { initializeTimes } from './sections/ReserveTable';
import { updateTimes } from './sections/ReserveTable';

test('renders choose date label', () => {
  render(<BookingForm availableTimes={['1','2']}/>);
  const linkElement = screen.getByText("Choose date:");
  expect(linkElement).toBeInTheDocument();
});

test('initializeTimes test', ()=>{
  expect(Array.isArray(initializeTimes())).toBe(true);
})

test('updateTimes test', ()=>{
  const newDate = new Date();
  const state = [];
  expect(Array.isArray(updateTimes([],newDate))).toBe(true);
})