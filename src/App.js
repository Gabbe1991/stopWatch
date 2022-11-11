import React from "react"
import logo from './logo.svg';
import './App.css';

export default function App() {
    const [time, setTime ] = React.useState(0)
    const [timerOn, setTimerOn] = React.useState(false)
    const [timerStart, setTimerStart] = React.useState(0)
    const [timerTime, setTimerTime] = React.useState(0)

    React.useEffect(() => {
        let interval = null
        if (timerOn) {
            interval = setInterval(() => {
                const newTime = Date.now() - timerStart
                setTime(newTime)
            }, 10)
        } else if (!timerOn) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [timerOn])

    const handleStart = () => {
        setTimerOn(true)
        setTimerTime(time)
        setTimerStart(Date.now() - time)
    }

    const handleStop = () => {
        setTimerOn(false)
    }

    const handleReset = () => {
        setTimerOn(false)
        setTime(0)
        setTimerTime(0)
    }

    const handleResume = () => {
        setTimerOn(true)
        setTimerStart(Date.now() - timerTime)
    }



    return (
        <div className="App">
            <div>{time}</div>
            <div>
                <button onClick={() => handleStart()}>Start</button>
                <button onClick={() => handleStop()}>Stop</button>
                <button onClick={() => handleReset()}>Reset</button>


            </div>

        </div>
    );
    
}