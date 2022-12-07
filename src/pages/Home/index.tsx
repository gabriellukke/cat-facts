export default function Home() {
  return (
    <main>
      <h1 className="text-5xl">Cat Facts</h1>
      <form>
        <label htmlFor="facts-number">
          How many facts do you want to know?
          <input type="number" id="facts-number" />
        </label>
        <button type="button">Get facts</button>
      </form>
    </main>
  );
}
