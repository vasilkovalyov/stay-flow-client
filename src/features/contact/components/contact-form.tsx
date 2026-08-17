import { MailIcon, Send } from 'lucide-react';

import { LightOverlay } from '@/components/shared';
import {
  Button,
  Field,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  NativeSelect,
  NativeSelectOption,
  Textarea,
} from '@/components/ui';

export function ContactForm() {
  return (
    <LightOverlay className="p-[32px]">
      <form className="flex flex-wrap justify-between gap-[16px]">
        <div className="w-full sm:w-[calc(50%_-_16px)]">
          <Field>
            <FieldLabel htmlFor="form-first-name">First name</FieldLabel>
            <InputGroup>
              <InputGroupInput id="form-first-name" type="text" placeholder="First name" />
            </InputGroup>
          </Field>
        </div>
        <div className="w-full sm:w-[calc(50%_-_16px)]">
          <Field>
            <FieldLabel htmlFor="form-last-name">Last name</FieldLabel>
            <InputGroup>
              <InputGroupInput id="form-last-name" type="text" placeholder="Last name" />
            </InputGroup>
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="form-email">Email</FieldLabel>
          <InputGroup>
            <InputGroupAddon>
              <MailIcon />
            </InputGroupAddon>
            <InputGroupInput id="form-email" type="email" placeholder="you@example.com" />
          </InputGroup>
        </Field>

        <Field>
          <FieldLabel htmlFor="form-country">Subject</FieldLabel>
          <NativeSelect id="form-country" defaultValue="se">
            <NativeSelectOption value="se">Booking issue</NativeSelectOption>
            <NativeSelectOption value="no">Payment problem</NativeSelectOption>
            <NativeSelectOption value="dk">Host support</NativeSelectOption>
            <NativeSelectOption value="fi">Account help</NativeSelectOption>
            <NativeSelectOption value="fi">Other</NativeSelectOption>
          </NativeSelect>
        </Field>

        <Field>
          <FieldLabel htmlFor="form-message">Message</FieldLabel>
          <Textarea
            id="form-message"
            placeholder="Describe your issue in detail..."
            rows={4}
            className="min-h-[122px]"
          />
        </Field>

        <Button type="submit" className="w-full" size="lg">
          <Send size={16} />
          Send message
        </Button>
      </form>
    </LightOverlay>
  );
}
