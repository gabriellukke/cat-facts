import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h1 className="text-5xl">Page not found</h1>
      <Link to="/">Go to home page</Link>
    </>
  );
}
