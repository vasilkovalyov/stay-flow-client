import Image from 'next/image';

export function OurMission() {
  return (
    <section className="grid grid-cols-2 gap-[40px] items-center">
      <div className="grid gap-[16px]">
        <h2 className="text-[30px] font-extrabold">Our mission</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We started StayFlow with a simple belief: everyone deserves to experience the world in
          comfort, authenticity, and style. Traditional hotels can feel impersonal. We wanted to
          change that.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Today, we`re a community of millions — hosts who open their doors and guests who arrive as
          strangers and leave as friends.
        </p>
      </div>
      <Image
        src="/images/photo-about.webp"
        alt="Team"
        width={408}
        height={272}
        className="rounded-2xl w-full"
      />
    </section>
  );
}
