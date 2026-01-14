import React, {useState, useEffect } from 'react'

export default function CountdownTimer({endTime}) {
    const [timeLeft, setTimeLeft ] = useState({ days : 0, hours : 0, mins : 0, secs : 0})

     useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = endTime - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        mins: Math.floor((distance / (1000 * 60)) % 60),
        secs: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className="flex items-center justify-center gap-3">

        <div>
            <p className="bg-[#8F67EF] text-white text-[22px] h-[60px] w-[60px] rounded-[6px] font-bold flex items-center justify-center">{timeLeft.days}</p>
            <p className="text-[16px] text-white pt-3">Days</p>
        </div>

         <div>
            <p className="bg-[#8F67EF] text-white text-[22px] h-[60px] w-[60px] rounded-[6px] font-bold  flex items-center justify-center">{timeLeft.hours}</p>
            <p className="text-[16px] text-white pt-3">Hours</p>
        </div>

         <div>
            <p className="bg-[#8F67EF] text-white text-[22px] h-[60px] w-[60px] rounded-[6px] font-bold  flex items-center justify-center">{timeLeft.mins}</p>
            <p className="text-[16px] text-white pt-3">Mins</p>
        </div>

         <div>
            <p className="bg-[#8F67EF] text-white text-[22px] h-[60px] w-[60px] rounded-[6px] font-bold  flex items-center justify-center">{timeLeft.secs}</p>
            <p className="text-[16px] text-white pt-3">Secs</p>
        </div>
        
    </div>
  )
}
