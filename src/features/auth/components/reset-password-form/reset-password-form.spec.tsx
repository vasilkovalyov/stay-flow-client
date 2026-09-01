import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { VALIDATION_MESSAGES } from '../../constants';
import { ResetPasswordForm } from './reset-password-form';

const validPassword = 'Password123';

async function fillValidForm(
  user: ReturnType<typeof userEvent.setup>,
  overrides: Partial<{
    password: string;
    confirmPassword: string;
  }> = {},
) {
  const { password = validPassword, confirmPassword = validPassword } = overrides;

  if (password) {
    await user.type(screen.getByTestId('password'), password);
  }
  if (confirmPassword) {
    await user.type(screen.getByTestId('confirm-password'), confirmPassword);
  }
}

describe('ResetPasswordForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(<ResetPasswordForm token="test-token" />);
  });

  it('reset password form with password shorter than 8 characters', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { password: 'Pass1', confirmPassword: 'Pass1' });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.password.min)).toBeInTheDocument();
  });

  it('reset password form with password missing an uppercase letter', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { password: 'password123', confirmPassword: 'password123' });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.password.uppercase)).toBeInTheDocument();
  });

  it('reset password form with password missing a number', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { password: 'Password', confirmPassword: 'Password' });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.password.number)).toBeInTheDocument();
  });

  it('reset password form with empty confirm password', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { confirmPassword: '' });
    await user.click(screen.getByTestId('submit'));

    expect(
      await screen.findByText(VALIDATION_MESSAGES.confirmPassword.required),
    ).toBeInTheDocument();
  });

  it('reset password form with mismatched confirm password', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { confirmPassword: `${validPassword}4` });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.password.mismatch)).toBeInTheDocument();
  });

  it('reset password form with valid data', async () => {
    const user = userEvent.setup();

    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await fillValidForm(user);
    await user.click(screen.getByTestId('submit'));

    expect(consoleSpy).toHaveBeenCalledWith({
      password: validPassword,
      confirmPassword: validPassword,
    });

    consoleSpy.mockRestore();
  });
});
