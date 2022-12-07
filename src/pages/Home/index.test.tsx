import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '.';

describe('Home page', () => {
  it('should render the home page', async () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /cat facts/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("can't click on the button if there is no number of facts", () => {
    render(<Home />);

    const factsButton = screen.getByRole('button', {
      name: /get facts/i,
    });
    expect(factsButton).toBeDisabled();

    const factsInput = screen.getByRole('spinbutton');
    userEvent.type(factsInput, '5');
    expect(factsButton).toBeEnabled();

    userEvent.clear(factsInput);
    expect(factsButton).toBeDisabled();

    userEvent.type(factsInput, '0');
    expect(factsButton).toBeDisabled();
  });

  it('can choose number of facts', async () => {
    render(<Home />);

    const factsInput = screen.getByRole('spinbutton');
    userEvent.type(factsInput, '5');

    await waitFor(() => {
      expect(factsInput).toHaveValue(5);
    });

    const factsButton = screen.getByRole('button', {
      name: /get facts/i,
    });
    userEvent.click(factsButton);

    expect(factsInput).not.toBeInTheDocument();
  });
});
