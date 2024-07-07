import React, {useState, useReducer, useEffect} from "react";
import BookingForm from "../components/BookingForm";
import { getToday } from "../utils";
import {fetchAPI} from "../Api";

export function initializeTimes (){
    const currentDate = new Date();
    console.log("init",currentDate);
    return fetchAPI(currentDate);
  }

export const updateTimes = (state, newDate)=>{
    console.log("action",newDate);
    const data = fetchAPI(newDate);
    return data;
  }

export default function ReserveTable(){
    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, ['17:00']);
    
    useEffect(
        () => {
            const f = async () => {
            const currentDate = new Date();
            dispatchAvailableTimes(currentDate);}
        f();
    }
    , []);
    
    return (

        <section class='section' style={{display:'grid'}}>
            <h1>Book a Table</h1>
            <BookingForm 
                availableTimes={availableTimes} 
                dispatchAvailableTimes={dispatchAvailableTimes}
            />
        </section>
    );
}
