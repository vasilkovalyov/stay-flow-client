import { MailIcon } from 'lucide-react';

import {
  Button,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  Label,
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
  Textarea,
} from '@/components/ui';

export function FormSection() {
  return (
    <form className="max-w-[504px] space-y-[21px]" onSubmit={(event) => event.preventDefault()}>
      <div className="space-y-[7px]">
        <Label htmlFor="standalone-label">Search reservations</Label>
        <Input id="standalone-label" placeholder="Guest name or booking reference" />
      </div>

      <FieldSet>
        <FieldLegend>Contact request</FieldLegend>
        <FieldDescription>Tell us a bit about yourself and how we can help.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="form-name">Full name</FieldLabel>
            <Input id="form-name" placeholder="Jane Cooper" defaultValue="Vasiliy Kovalyov" />
          </Field>

          <Field data-invalid="true">
            <FieldLabel htmlFor="form-email">Email</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <MailIcon />
              </InputGroupAddon>
              <InputGroupInput
                id="form-email"
                type="email"
                placeholder="you@example.com"
                aria-invalid
              />
            </InputGroup>
            <FieldError errors={[{ message: 'Enter a valid email address.' }]} />
          </Field>
          <Field data-invalid="false">
            <FieldLabel htmlFor="form-email">Email</FieldLabel>
            <InputGroup>
              <InputGroupAddon align="inline-end">
                <MailIcon />
              </InputGroupAddon>
              <InputGroupInput id="form-email" type="email" placeholder="you@example.com" />
            </InputGroup>
          </Field>
          <Field data-invalid="false">
            <FieldLabel htmlFor="form-email">Email</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <MailIcon />
              </InputGroupAddon>
              <InputGroupInput id="form-email" type="email" placeholder="you@example.com" />
            </InputGroup>
          </Field>

          <Field>
            <FieldLabel htmlFor="form-country">Country</FieldLabel>
            <NativeSelect id="form-country" defaultValue="se">
              <NativeSelectOptGroup label="Nordics">
                <NativeSelectOption value="se">Sweden</NativeSelectOption>
                <NativeSelectOption value="no">Norway</NativeSelectOption>
                <NativeSelectOption value="dk">Denmark</NativeSelectOption>
                <NativeSelectOption value="fi">Finland</NativeSelectOption>
              </NativeSelectOptGroup>
              <NativeSelectOptGroup label="Other">
                <NativeSelectOption value="us">United States</NativeSelectOption>
                <NativeSelectOption value="gb">United Kingdom</NativeSelectOption>
              </NativeSelectOptGroup>
            </NativeSelect>
          </Field>

          <Field>
            <FieldLabel htmlFor="form-message">Message</FieldLabel>
            <Textarea id="form-message" placeholder="How can we help?" rows={4} />
            <FieldDescription>Include as much detail as possible.</FieldDescription>
          </Field>

          <FieldSeparator>Verification</FieldSeparator>

          <Field>
            <FieldContent>
              <FieldLabel htmlFor="form-otp">One-time code</FieldLabel>
              <FieldDescription>Enter the 6-digit code sent to your email.</FieldDescription>
            </FieldContent>
            <InputOTP maxLength={6} id="form-otp">
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </Field>
        </FieldGroup>
      </FieldSet>

      <div className="flex justify-end gap-[8px]">
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button type="submit">Submit request</Button>
      </div>
    </form>
  );
}
