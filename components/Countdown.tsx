import {useEffect, useState} from "react";
import {Divider} from "@/components/Divider";

export const Countdown = () => {
  const weddingDate = '08/23/2025 19:00:00';
  const [timeRemaining, setTimeRemaining] = useState(0);


  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const eventTime = new Date(weddingDate).getTime();
      const remainingTime = eventTime - currentTime;
      setTimeRemaining(remainingTime);
    }, 1000);

    if (timeRemaining < 0) clearInterval(countdownInterval);

    return () => clearInterval(countdownInterval);
  }, [timeRemaining]);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return (
      <div className="flex gap-20">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className='text-3xl'>{months.toString()}</div>
          <div>μήνες</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className='text-3xl'>{(days % 31).toString()}</div>
          <div>μέρες</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className='text-3xl'>{hours.toString()}</div>
          <div>ώρες</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className='text-3xl'>{minutes.toString()}</div>
          <div>λεπτά</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className='text-3xl'>{seconds.toString()}</div>
          <div>δευτερόλεπτα</div>
        </div>
      </div>
    );
  };

  if (timeRemaining <= 0) return;

  return (
    <>
      <div className="countdown-timer-container">
        {formatTime(timeRemaining)}
      </div>
      <Divider/>
    </>
  );
};
