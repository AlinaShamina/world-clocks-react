import { useState } from 'react';
import { WorldClockForm } from './components/WorldClockForm';
import { WorldClockList } from './components/WorldClockList';
import type { Clock } from './types/WorldClockTypes';

function App() {
  const [clocks, setClocks] = useState<Clock[]>([]);

  const addClock = (title: string, timezoneOffset: number): void => {
    setClocks((prev: Clock[]) => [
      ...prev,
      {
        id: Date.now(),
        title,
        timezoneOffset,
      },
    ]);
  };

  const removeClock = (id: number): void => {
    setClocks((prev: Clock[]) =>
      prev.filter((clock: Clock) => clock.id !== id)
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Мировые часы</h1>
      <WorldClockForm onAdd={addClock} />
      <WorldClockList clocks={clocks} onRemove={removeClock} />
    </div>
  );
}

export default App;
