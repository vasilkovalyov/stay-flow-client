interface PageHeadingProps {
  title: string;
  subtitle: string;
}

export function PageHeading({ title, subtitle }: PageHeadingProps) {
  return (
    <div className="grid gap-[8px]">
      <h1>{title}</h1>
      <p className="text-muted-foreground text-sm">{subtitle}</p>
    </div>
  );
}
