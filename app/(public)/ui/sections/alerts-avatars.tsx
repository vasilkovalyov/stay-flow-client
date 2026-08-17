import { CircleCheckIcon, TriangleAlertIcon } from 'lucide-react';

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  Button,
} from '@/components/ui';

export function AlertsAvatarsSection() {
  return (
    <div className="space-y-[35px]">
      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">Alert</h3>
        <div className="grid gap-[14px] md:grid-cols-2">
          <Alert>
            <CircleCheckIcon />
            <AlertTitle>Changes saved</AlertTitle>
            <AlertDescription>
              Your profile information has been updated successfully.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <TriangleAlertIcon />
            <AlertTitle>Unable to save changes</AlertTitle>
            <AlertDescription>Please check the form for errors and try again.</AlertDescription>
            <AlertAction>
              <Button size="sm" variant="destructive">
                Retry
              </Button>
            </AlertAction>
          </Alert>
        </div>
      </div>

      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">Avatar</h3>
        <div className="flex flex-wrap items-center gap-[21px]">
          <div className="flex items-center gap-[10px]">
            <Avatar size="sm">
              <AvatarImage src="https://github.com/shadcn.png" alt="Shad" />
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
            <Avatar size="default">
              <AvatarImage src="https://github.com/shadcn.png" alt="Shad" />
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarImage src="https://github.com/shadcn.png" alt="Shad" />
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex items-center gap-[10px]">
            <Avatar size="sm">
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
            <Avatar size="default">
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
          </div>

          <Avatar>
            <AvatarImage src="/broken-image.png" alt="Broken" />
            <AvatarFallback>KO</AvatarFallback>
            <AvatarBadge />
          </Avatar>

          <AvatarGroup>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="User one" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>+5</AvatarGroupCount>
          </AvatarGroup>
        </div>
      </div>
    </div>
  );
}
