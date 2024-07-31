import React, { useEffect, useState }from 'react'

function Timer() {
    
    const deadline = new Date("2024-07-31T23:59:59").getTime();
      
    const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = deadline - now;
    
    const timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
    };

    return timeLeft;
      };
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    useEffect(() => {
    const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
    }, 60000);
    
    return () => clearInterval(timer);
    }, []);


  return (
          <div className="CountdownTimer">
            <p>{timeLeft.days} Days: {timeLeft.hours} Hours: {timeLeft.minutes} Minutes</p>
          </div>
      );
}

export default Timer