import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date('2025-05-18') - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center space-x-4 md:space-x-6">
      {timeBlocks.map((block) => (
        <div 
          key={block.label} 
          className="flex flex-col items-center"
        >
          <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-lg shadow-md flex items-center justify-center mb-2">
            <span className="text-2xl md:text-3xl font-bold text-primary-700">
              {block.value < 10 ? `0${block.value}` : block.value}
            </span>
          </div>
          <span className="text-xs md:text-sm text-secondary-600">{block.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;