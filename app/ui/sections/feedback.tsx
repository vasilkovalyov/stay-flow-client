import { Progress, ProgressLabel, ProgressValue, Skeleton, Slider, Spinner } from '@/components/ui';

export function FeedbackSection() {
  return (
    <div className="space-y-[35px]">
      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">Progress</h3>
        <div className="max-w-[392px] space-y-[14px]">
          <Progress value={40} />
          <Progress value={75}>
            <ProgressLabel>Uploading</ProgressLabel>
            <ProgressValue />
          </Progress>
          <Progress value={null}>
            <ProgressLabel>Processing</ProgressLabel>
          </Progress>
        </div>
      </div>

      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">Slider</h3>
        <div className="max-w-[392px] space-y-[21px]">
          <Slider defaultValue={[50]} />
          <Slider defaultValue={[25, 75]} />
          <Slider defaultValue={[40]} disabled />
        </div>
      </div>

      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">Spinner</h3>
        <div className="flex items-center gap-[14px]">
          <Spinner className="size-[14px]" />
          <Spinner className="size-[21px]" />
          <Spinner className="size-[28px] text-primary" />
        </div>
      </div>

      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">Skeleton</h3>
        <div className="flex max-w-[392px] items-center gap-[14px]">
          <Skeleton className="size-[42px] rounded-full" />
          <div className="flex-1 space-y-[7px]">
            <Skeleton className="h-[14px] w-3/4" />
            <Skeleton className="h-[14px] w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}
