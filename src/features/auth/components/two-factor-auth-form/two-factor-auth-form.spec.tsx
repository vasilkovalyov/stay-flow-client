import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { VALIDATION_MESSAGES } from '../../constants';
import { TwoFactorAuthForm } from './two-factor-auth-form';

const validCode = '123456';

async function fillValidForm(
  user: ReturnType<typeof userEvent.setup>,
  overrides: Partial<{ code: string }> = {},
) {
  const { code = validCode } = overrides;

  if (code) {
    await user.type(screen.getByTestId('code'), code);
  }
}

describe('TwoFactorAuthForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(<TwoFactorAuthForm />);
  });

  it('two factor auth form with empty code', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { code: '' });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.code.invalid)).toBeInTheDocument();
  });

  it('two factor auth form with incomplete code', async () => {
    const user = userEvent.setup();

    await fillValidForm(user, { code: '123' });
    await user.click(screen.getByTestId('submit'));

    expect(await screen.findByText(VALIDATION_MESSAGES.code.invalid)).toBeInTheDocument();
  });

  it('two factor auth form with valid code', async () => {
    const user = userEvent.setup();

    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await fillValidForm(user);
    await user.click(screen.getByTestId('submit'));

    expect(consoleSpy).toHaveBeenCalledWith({
      code: validCode,
    });

    consoleSpy.mockRestore();
  });
});
