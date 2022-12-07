import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [factsQuantity, setFactsQuantity] = useState(0);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFactsQuantity(Number(value));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    return navigate('/facts');
  };

  const hasFacts = factsQuantity > 0;

  return (
    <main>
      <h1 className="text-5xl">Cat Facts</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="facts-number">
          How many facts do you want to know?
          <input
            type="number"
            id="facts-number"
            value={factsQuantity}
            onChange={handleChange}
          />
        </label>
        <button type="submit" disabled={!hasFacts}>
          Get facts
        </button>
      </form>
    </main>
  );
}
