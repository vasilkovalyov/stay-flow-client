import { DownloadIcon, MailIcon, TrashIcon } from 'lucide-react';

import { Badge, Button } from '@/components/ui';

const BUTTON_VARIANTS = [
  'default',
  'secondary',
  'outline',
  'ghost',
  'destructive',
  'link',
] as const;
const BUTTON_SIZES = ['lg', 'default', 'sm'] as const;
const BADGE_VARIANTS = ['default', 'success', 'warning', 'error', 'info', 'outline'] as const;

export function ButtonsBadgesSection() {
  return (
    <div className="space-y-[35px]">
      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">Variants</h3>
        <div className="flex flex-wrap gap-[10px]">
          {BUTTON_VARIANTS.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">Sizes</h3>
        <div className="flex flex-wrap items-center gap-[10px]">
          {BUTTON_SIZES.map((size) => (
            <Button key={size} size={size}>
              Size {size}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">With icon and disabled</h3>
        <div className="flex flex-wrap items-center gap-[10px]">
          <Button>
            <MailIcon data-icon="inline-start" />
            Send email
          </Button>
          <Button variant="secondary">
            Download
            <DownloadIcon data-icon="inline-end" />
          </Button>
          <Button variant="destructive">
            <TrashIcon data-icon="inline-start" />
            Delete
          </Button>
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            <MailIcon data-icon="inline-start" />
            Disabled with icon
          </Button>
        </div>
      </div>

      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">Badge variants</h3>
        <div className="flex flex-wrap items-center gap-[7px]">
          {BADGE_VARIANTS.map((variant) => (
            <Badge key={variant} variant={variant}>
              {variant}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
