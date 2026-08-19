import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { VALIDATION_MESSAGES } from '../../constants';
import { SignUpForm } from './sign-up-form';
import { signUp } from './sign-up-form.utils';

const firstName = 'John';
const lastName = 'Doe';
const correctEmail = 'test@example.com';
const inCorrectEmail = 'test';
const validPassword = 'Password123';

vi.mock('./sign-up-form.utils', () => ({
  signUp: vi.fn(),
}));

async function fillValidForm(
  user: ReturnType<typeof userEvent.setup>,
  overrides: Partial<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
  }> = {},
) {
  const {
    firstName: firstNameValue = firstName,
    lastName: lastNameValue = lastName,
    email = correctEmail,
    password = validPassword,
    confirmPassword = validPassword,
    acceptTerms = true,
  } = overrides;

  if (firstNameValue) {
    await user.type(screen.getByTestId('first-name'), firstNameValue);
  }
  if (lastNameValue) {
    await user.type(screen.getByTestId('last-name'), lastNameValue);
  }
  if (email) {
    await user.type(screen.getByTestId('email'), email);
  }
  if (password) {
    await user.type(screen.getByTestId('password'), password);
  }
  if (confirmPassword) {
    await user.type(screen.getByTestId('confirm-password'), confirmPassword);
  }
  if (acceptTerms) {
    await user.click(screen.getByTestId('terms'));
  }
}

describe('SignUpForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(<SignUpForm />);
  });

  it('sign up form with empty first name', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { firstName: '' });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.firstName.required)).toBeInTheDocument();
  });

  it('sign up form with empty last name', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { lastName: '' });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.lastName.required)).toBeInTheDocument();
  });

  it('sign up form with incorrect email', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { email: inCorrectEmail });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.email.invalid)).toBeInTheDocument();
  });

  it('sign up form with password shorter than 8 characters', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { password: 'Pass1', confirmPassword: 'Pass1' });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.password.min)).toBeInTheDocument();
  });

  it('sign up form with password missing an uppercase letter', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { password: 'password123', confirmPassword: 'password123' });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.password.uppercase)).toBeInTheDocument();
  });

  it('sign up form with password missing a number', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { password: 'Password', confirmPassword: 'Password' });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.password.number)).toBeInTheDocument();
  });

  it('sign up form with mismatched confirm password', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { confirmPassword: `${validPassword}4` });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.password.mismatch)).toBeInTheDocument();
  });

  it('sign up form without accepting terms', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { acceptTerms: false });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.terms.required)).toBeInTheDocument();
  });

  it('sign up form with valid data', async () => {
    const user = userEvent.setup();

    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await fillValidForm(user);
    await user.click(screen.getByTestId('submit'));

    expect(consoleSpy).toHaveBeenCalledWith({
      firstName,
      lastName,
      email: correctEmail,
      password: validPassword,
      confirmPassword: validPassword,
      terms: true,
    });

    consoleSpy.mockRestore();
  });

  it('sign up form if user already exists', async () => {
    const user = userEvent.setup();

    vi.mocked(signUp).mockRejectedValue(new Error('User already exist'));

    await fillValidForm(user);
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(/user already exist/i)).toBeInTheDocument();
  });
});
