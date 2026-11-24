'use client'
import React, { useState, useEffect } from 'react'

export default function CountDown(){
    let [minutes, setMinutes] = useState(0);
    let [remainingSeconds, setRemainingSeconds] = useState(0);

    useEffect(() => {

        let intervalId = setInterval(() => {
            calculateTimeRemaining()
        }, 1000);

        var seconds = 3599;
        function calculateTimeRemaining() {

            const minutes = Math.round((seconds - 30) / 60);
            const remainingSeconds = seconds % 60;

            setMinutes(minutes);
            setRemainingSeconds(remainingSeconds);

            if (seconds === 0) {
                clearInterval(intervalId);
            } else {
                seconds = seconds - 1;
            }
        }

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return(
        <>
        <span id="maintenance" className="timer h1 text-white title-dark">{ minutes }:{ remainingSeconds }</span><span className="d-block h6 text-uppercase text-white-50">Minutes</span>
        </>
    )
}