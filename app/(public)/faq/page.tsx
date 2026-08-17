import { FaqList, HaveQuestions, Hero } from './components';

export default function Faq() {
  return (
    <section className="pt-[64px] pb-0">
      <div className="container-sm">
        <div className="grid gap-[40px]">
          <Hero />
          <FaqList />
          <HaveQuestions />
        </div>
      </div>
    </section>
  );
}
