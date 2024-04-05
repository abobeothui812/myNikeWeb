import React,{useState,useEffect} from "react";
import styles from './digitalClock.module.css';

function DigitalClock(){
    
    const [time,setTime] = useState(new Date());

    useEffect(() => {
        const intervalid = setInterval(()=>{
            setTime(new Date());
        },1000)

        return () =>{
            clearInterval(intervalid);
        }

    },[])

    function formatTime(){
        let hours = time.getHours();
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();

        const meridiem = hours > 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }


    function padZero(number){
        if(number < 10){
            return "0" + number;
        }else{
            return "" +number;
        }
    }
    return(<>
        <div className={styles.digitalClockContainer}>
            <div className={styles.clock}>
                <span>{formatTime()}</span>

            </div>


        </div>
    
    
    </>)
}

export default DigitalClock;