import { useState } from 'react';
import './task_bar.css'

export function TaskBar() {
    const [date, setDate] = useState(new Date);

    function setIntervalHour() {
        setInterval(() => {
            var dates = new Date();
            setDate(dates)
        }, 1000);
    }
    
    setIntervalHour();

    return(
        <div className='bar_task'>
          <div className='icons_left'>
            <i className="fa-brands fa-windows icon_task"></i>
            <i className="fa-solid fa-magnifying-glass icon_task"></i>
          </div>
          <div className='info_right'>
            <span className='date'>{date.getHours()}:{date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes()}:{date.getSeconds() <= 9 ? '0' + date.getSeconds() : date.getSeconds()}</span>
          </div>
        </div>
    );
}