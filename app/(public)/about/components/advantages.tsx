import { LightOverlay } from '@/components/shared';

const ADVANTAGES_LIST = [
  {
    id: '1',
    pretitle: '2.4M+',
    title: 'Happy guests',
    text: 'Travelers who found their perfect stay',
  },
  {
    id: '2',
    pretitle: '50K+',
    title: 'Verified hosts',
    text: 'Trusted property owners worldwide',
  },
  {
    id: '3',
    pretitle: '180+',
    title: 'Countries',
    text: 'Properties in every corner of the world',
  },
];

export function Advantages() {
  return (
    <section className="grid grid-cols-3 gap-[20px]">
      {ADVANTAGES_LIST.map(({ id, pretitle, title, text }) => (
        <LightOverlay key={id} className="p-[24px] text-center">
          <p className="text-[36px] font-extrabold text-primary">{pretitle}</p>
          <p className="font-bold">{title}</p>
          <p className="text-muted-foreground">{text}</p>
        </LightOverlay>
      ))}
    </section>
  );
}
