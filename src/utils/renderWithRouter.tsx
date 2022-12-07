/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

export default function renderWithRouter(
  ui: React.ReactElement,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) {
  return {
    ...render(
      <Router navigator={history} location={route}>
        {ui}
      </Router>,
    ),
    history,
  };
}
