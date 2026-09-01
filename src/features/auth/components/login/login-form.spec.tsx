import { VALIDATION_MESSAGES } from '@/features/auth/constants';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { LoginForm } from './login-form';
import { login } from './login.api';

const correctEmail = 'test@example.com';
const incorrectEmail = 'test';
const validPassword = 'password123';

vi.mock('./login-form.utils', () => ({
  signIn: vi.fn(),
}));

async function fillValidForm(
  user: ReturnType<typeof userEvent.setup>,
  overrides: Partial<{
    email: string;
    password: string;
    rememberMe: boolean;
  }> = {},
) {
  const { email = correctEmail, password = validPassword, rememberMe = false } = overrides;

  if (email) {
    await user.type(screen.getByTestId('email'), email);
  }
  if (password) {
    await user.type(screen.getByTestId('password'), password);
  }
  if (rememberMe) {
    await user.click(screen.getByTestId('remember-me'));
  }
}

describe('LoginForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(<LoginForm />);
  });

  it('login form with empty email', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { email: '' });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.email.invalid)).toBeInTheDocument();
  });

  it('login form with incorrect email', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { email: incorrectEmail });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.email.invalid)).toBeInTheDocument();
  });

  it('login form with empty password', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { password: '' });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.password.required)).toBeInTheDocument();
  });

  it('login form with remember me checkbox', async () => {
    const user = userEvent.setup();

    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await fillValidForm(user, { rememberMe: true });
    await user.click(screen.getByTestId('submit'));

    expect(consoleSpy).toHaveBeenCalledWith({
      email: correctEmail,
      password: validPassword,
      rememberMe: true,
    });

    consoleSpy.mockRestore();
  });

  it('login form without remember me checkbox', async () => {
    const user = userEvent.setup();

    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await fillValidForm(user);
    await user.click(screen.getByTestId('submit'));

    expect(consoleSpy).toHaveBeenCalledWith({
      email: correctEmail,
      password: validPassword,
      rememberMe: false,
    });

    consoleSpy.mockRestore();
  });

  it('login form if user not found', async () => {
    const user = userEvent.setup();

    vi.mocked(login).mockRejectedValue(new Error('User not found'));

    await fillValidForm(user);
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(/user not found/i)).toBeInTheDocument();
  });
});
