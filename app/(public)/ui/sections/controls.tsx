import { BoldIcon } from 'lucide-react';

import { Checkbox, Field, FieldLabel, Switch, Toggle } from '@/components/ui';

export function ControlsSection() {
  return (
    <div className="space-y-[35px]">
      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">Checkbox</h3>
        <div className="flex flex-wrap gap-[21px]">
          <Field orientation="horizontal">
            <Checkbox id="checkbox-unchecked" />
            <FieldLabel htmlFor="checkbox-unchecked">Unchecked</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="checkbox-checked" defaultChecked />
            <FieldLabel htmlFor="checkbox-checked">Checked</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="checkbox-disabled" disabled />
            <FieldLabel htmlFor="checkbox-disabled">Disabled</FieldLabel>
          </Field>
        </div>
      </div>

      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">Switch</h3>
        <div className="flex flex-wrap gap-[21px]">
          <Field orientation="horizontal">
            <Switch id="switch-off" />
            <FieldLabel htmlFor="switch-off">Off</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Switch id="switch-on" defaultChecked />
            <FieldLabel htmlFor="switch-on">On</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Switch id="switch-sm" size="sm" defaultChecked />
            <FieldLabel htmlFor="switch-sm">Small, on</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Switch id="switch-disabled" disabled />
            <FieldLabel htmlFor="switch-disabled">Disabled</FieldLabel>
          </Field>
        </div>
        <div className="flex flex-wrap gap-[21px]">
          <Field orientation="horizontal">
            <Switch variant="secondary" id="switch-off" />
            <FieldLabel htmlFor="switch-off">Off</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Switch variant="secondary" id="switch-on" defaultChecked />
            <FieldLabel htmlFor="switch-on">On</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Switch variant="secondary" id="switch-sm" size="sm" defaultChecked />
            <FieldLabel htmlFor="switch-sm">Small, on</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Switch variant="secondary" id="switch-disabled" disabled />
            <FieldLabel htmlFor="switch-disabled">Disabled</FieldLabel>
          </Field>
        </div>
      </div>

      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">Toggle</h3>
        <div className="flex flex-wrap items-center gap-[10px]">
          <Toggle aria-label="Toggle bold">
            <BoldIcon />
          </Toggle>
          <Toggle aria-label="Toggle bold pressed" defaultPressed>
            <BoldIcon />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle outline">
            <BoldIcon />
            Bold
          </Toggle>
          <Toggle aria-label="Toggle disabled" disabled>
            <BoldIcon />
          </Toggle>
        </div>
      </div>
    </div>
  );
}
