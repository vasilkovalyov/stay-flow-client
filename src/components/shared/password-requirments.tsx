import { CircleCheckBig } from 'lucide-react';

const PASSWORD_INFO_LIST = ['At least 8 characters', 'One uppercase letter', 'One number'];

export function PasswordRequirements() {
  return (
    <div className="grid gap-[6px] bg-secondary rounded-xl p-[12px] space-y-[4px]">
      {PASSWORD_INFO_LIST.map((info, index) => (
        <p key={index} className="flex items-center gap-[6px] text-xs text-muted-foreground">
          <CircleCheckBig size={14} className="text-success" />
          {info}
        </p>
      ))}
    </div>
  );
}
