import { ContactForm } from '@/features/contact/components';

import { Contacts, Hero } from './components';

export default function Contact() {
  return (
    <section className="pt-[64px] pb-0">
      <div className="container-md">
        <div className="grid gap-[40px]">
          <Hero />
          <Contacts />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
