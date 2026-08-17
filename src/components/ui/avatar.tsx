import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';
import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar';

function Avatar({
  className,
  size = 'default',
  ...props
}: AvatarPrimitive.Root.Props & {
  size?: 'default' | 'sm' | 'lg';
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        `
          group/avatar relative flex shrink-0
          rounded-full select-none
          size-[40px]
          
          data-[size=lg]:size-[64px]
          data-[size=sm]:size-[32px]

          after:absolute
          after:inset-0
          after:rounded-full
          after:mix-blend-darken
        `,
        className,
      )}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full rounded-full object-cover', className)}
      {...props}
    />
  );
}

function AvatarFallback({ className, ...props }: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'flex size-full font-bold items-center justify-center rounded-full bg-primary text-primary-foreground group-data-[size=sm]/avatar:text-xs group-data-[size=lg]/avatar:text-lg',
        className,
      )}
      {...props}
    />
  );
}

function AvatarBadge({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        'absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none',
        'group-data-[size=sm]/avatar:size-[7px] group-data-[size=sm]/avatar:[&>svg]:hidden',
        'group-data-[size=default]/avatar:size-[8px] group-data-[size=default]/avatar:[&>svg]:size-[7px]',
        'group-data-[size=lg]/avatar:size-[10px] group-data-[size=lg]/avatar:[&>svg]:size-[7px]',
        className,
      )}
      {...props}
    />
  );
}

function AvatarGroup({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        'group/avatar-group flex -space-x-[7px] *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background',
        className,
      )}
      {...props}
    />
  );
}

function AvatarGroupCount({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        `
          relative flex size-[28px] shrink-0
          items-center justify-center

          rounded-full bg-muted
          text-muted-foreground
          ring-2 ring-background

          group-has-data-[size=lg]/avatar-group:size-[35px]
          group-has-data-[size=sm]/avatar-group:size-[21px]

          [&>svg]:size-[14px]
          group-has-data-[size=lg]/avatar-group:[&>svg]:size-[17.5px]
          group-has-data-[size=sm]/avatar-group:[&>svg]:size-[10px]
        `,
        className,
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarBadge };
