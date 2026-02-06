import type { Clock } from '../types/WorldClockTypes';
import { WorldClock } from './WorldClock';

interface WorldClockListProps {
  clocks: Clock[];
  onRemove: (id: number) => void;
}

export const WorldClockList = ({
  clocks,
  onRemove,
}: WorldClockListProps) => {
  return (
    <div>
      {clocks.map((clock: Clock) => (
        <WorldClock
          key={clock.id}
          title={clock.title}
          timezoneOffset={clock.timezoneOffset}
          onRemove={() => onRemove(clock.id)}
        />
      ))}
    </div>
  );
};
