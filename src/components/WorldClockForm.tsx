import { useState } from 'react';

interface WorldClockFormProps {
  onAdd: (title: string, timezoneOffset: number) => void;
}

export const WorldClockForm = ({ onAdd }: WorldClockFormProps) => {
  const [title, setTitle] = useState('');
  const [timezone, setTimezone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || timezone === '') {
      alert('Заполните все поля');
      return;
    }

    onAdd(title, Number(timezone));
    setTitle('');
    setTimezone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Город"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="UTC смещение"
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
      />

      <button type="submit">Добавить</button>
    </form>
  );
};
