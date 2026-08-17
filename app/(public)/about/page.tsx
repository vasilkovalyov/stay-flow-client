import { Advantages, BecomeHost, Hero, OurMission } from './components';

export default function About() {
  return (
    <div className="pt-[64px] pb-0">
      <div className="container-lg">
        <div className="grid gap-[64px]">
          <Hero />
          <Advantages />
          <OurMission />
          <BecomeHost />
        </div>
      </div>
    </div>
  );
}
