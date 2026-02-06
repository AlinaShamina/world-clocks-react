import { useEffect, useState } from 'react';

interface WorldClockProps {
  title: string;
  timezoneOffset: number;
  onRemove: () => void;
}

export const WorldClock = ({
  title,
  timezoneOffset,
  onRemove,
}: WorldClockProps) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const cityTime = new Date(utc + timezoneOffset * 3600000);

      setTime(
        cityTime.toLocaleTimeString('ru-RU', { hour12: false })
      );
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timezoneOffset]);

  return (
    <div style={{ marginBottom: 10 }}>
      <strong>{title}</strong> — {time}
      <button onClick={onRemove} style={{ marginLeft: 10 }}>
        ✖
      </button>
    </div>
  );
};
