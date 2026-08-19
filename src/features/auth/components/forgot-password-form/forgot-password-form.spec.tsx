import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { VALIDATION_MESSAGES } from '../../constants';
import { ForgotPasswordForm } from './forgot-password-form';

const correctEmail = 'test@example.com';
const incorrectEmail = 'test';

async function fillValidForm(
  user: ReturnType<typeof userEvent.setup>,
  overrides: Partial<{ email: string }> = {},
) {
  const { email = correctEmail } = overrides;

  if (email) {
    await user.type(screen.getByTestId('email'), email);
  }
}

describe('ForgotPasswordForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(<ForgotPasswordForm />);
  });

  it('forgot password form with empty email', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { email: '' });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.email.invalid)).toBeInTheDocument();
  });

  it('forgot password form with incorrect email', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { email: incorrectEmail });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.email.invalid)).toBeInTheDocument();
  });

  it('forgot password form with valid email', async () => {
    const user = userEvent.setup();

    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await fillValidForm(user);
    await user.click(screen.getByTestId('submit'));

    expect(consoleSpy).toHaveBeenCalledWith({
      email: correctEmail,
    });

    consoleSpy.mockRestore();
  });
});
