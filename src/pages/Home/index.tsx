import { useState } from 'react';

export default function Home() {
  const [factsQuantity, setFactsQuantity] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFactsQuantity(Number(value));
  };

  const hasFacts = factsQuantity > 0;

  return (
    <main>
      <h1 className="text-5xl">Cat Facts</h1>
      <form>
        <label htmlFor="facts-number">
          How many facts do you want to know?
          <input
            type="number"
            id="facts-number"
            value={factsQuantity}
            onChange={handleChange}
          />
        </label>
        <button type="button" disabled={!hasFacts}>
          Get facts
        </button>
      </form>
    </main>
  );
}
