import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import { WrappedApp, App } from './App';
import renderWithRouter from './utils/renderWithRouter';

describe('App', () => {
  it('renders home page with title', () => {
    render(<WrappedApp />);

    const pageTitle = screen.getByRole('heading', {
      name: /rayo reader/i,
      level: 1,
    });
    expect(pageTitle).toBeInTheDocument();
  });

  it('renders not found in a route that does not exist', () => {
    render(
      <MemoryRouter initialEntries={['/xablau']}>
        <App />
      </MemoryRouter>,
    );

    const notFound = screen.getByRole('heading', {
      name: /page not found/i,
      level: 1,
    });
    expect(notFound).toBeInTheDocument();
  });

  it('renders home page when clicking on the link', async () => {
    const { history } = renderWithRouter(<App />, { route: '/xablau' });

    const link = screen.getByRole('link', { name: /go to home page/i });
    userEvent.click(link);

    await waitFor(() => {
      expect(history.location.pathname).toBe('/');
    });
  });
});
