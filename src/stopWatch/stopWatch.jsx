import React,{useState,useEffect,useRef} from "react";
import styles from "./stopWatch.module.css";

function Stopwatch(){

    const [isRunning,setIsrunning] = useState(false);
    const [elapsedTime,setElapsedtime] = useState(0);
    const intervalidRef = useRef(null);
    const startTimerref=useRef(0);

    useEffect(()=>{
        if(isRunning){
            intervalidRef.current=setInterval(()=>{
                setElapsedtime(Date.now() - startTimerref.current);
            },10);
        }

        return () => {clearInterval(intervalidRef.current);}

    },[isRunning])

    function start(){
        setIsrunning(true);
        startTimerref.current=Date.now() - elapsedTime;

    }

    function stop(){
        setIsrunning(false);

    }

    function reset(){
        setElapsedtime(0);
        setIsrunning(false);

    }

    function formatTime(){
        let milisecs = Math.floor(elapsedTime%1000/10);
        let secs = Math.floor((elapsedTime/1000)%60);
        let mins = Math.floor((elapsedTime/(1000*60))%60);
        let hours = Math.floor((elapsedTime/(1000*60*60))%60);
        milisecs=String(milisecs).padStart(2,"0");
        secs=String(secs).padStart(2,"0");
        mins=String(mins).padStart(2,"0");
        hours=pad(hours);

        return `${mins}:${secs}:${milisecs}`;
    }

    function pad(number){
        return number < 10 ? "0"+number : ""+number;
    }
    
    return(<div className={styles.container}>
        <div className={styles.display}><span>{formatTime()}</span></div>
        <div className={styles.control}>
        <button className={styles.Startbtn} onClick={start}>Start</button>
        <button className={styles.Stopbtn} onClick={stop}>Stop</button>
        <button className={styles.Resetbtn} onClick={reset}>Reset</button>
        </div>

    </div>)
}

export default Stopwatch