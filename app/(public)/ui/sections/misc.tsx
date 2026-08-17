import { AspectRatio, Separator } from '@/components/ui';

export function MiscSection() {
  return (
    <div className="space-y-[35px]">
      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">Aspect Ratio</h3>
        <AspectRatio
          ratio={16 / 9}
          className="flex max-w-[392px] items-center justify-center overflow-hidden rounded-xl bg-muted text-muted-foreground"
        >
          16:9 placeholder
        </AspectRatio>
      </div>

      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">Separator</h3>
        <div className="max-w-[392px] space-y-[14px]">
          <div>
            <p className="font-semibold">Stay Flow</p>
            <p className="text-muted-foreground">Property management platform</p>
          </div>
          <Separator />
          <div className="flex h-[28px] items-center gap-[14px]">
            <span>Blog</span>
            <Separator orientation="vertical" />
            <span>Docs</span>
            <Separator orientation="vertical" />
            <span>Source</span>
          </div>
        </div>
      </div>
    </div>
  );
}
