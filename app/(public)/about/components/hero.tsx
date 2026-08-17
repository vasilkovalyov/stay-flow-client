import { Badge } from '@/components/ui';

export function Hero() {
  return (
    <section>
      <div className="max-w-[672px] mx-auto text-center">
        <Badge variant="info">Est. 2020</Badge>
        <h1 className="text-[48px] font-extrabold mb-[20px]">
          Built for travelers, <br /> by travelers
        </h1>
        <p className="text-xl text-muted-foreground">
          StayFlow connects adventurous guests with extraordinary hosts worldwide. We believe every
          journey deserves a perfect place to call home.
        </p>
      </div>
    </section>
  );
}
