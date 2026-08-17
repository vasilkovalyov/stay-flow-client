import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui';

const FAQ = [
  {
    id: '1',
    title: 'How do I book a property?',
    text: 'Browse our listings, select your dates and guests, then proceed to secure checkout. Pay with a credit card, debit card, or bank transfer.',
  },
  {
    id: '2',
    title: 'What is the cancellation policy?',
    text: 'Policies vary by property. Most offer free cancellation up to 48 hours before check-in. Find the specific policy on each listing page.',
  },
  {
    id: '3',
    title: 'How do I become a host?',
    text: "Click 'Switch to Host' or 'Become a Host', complete your profile, and create your first listing. We review all listings within 24–48 hours.",
  },
  {
    id: '4',
    title: 'Is my payment information secure?',
    text: 'Yes — bank-level encryption, PCI-compliant processing, and we never store full card details. Payments are held in escrow and released to hosts after check-in.',
  },
  {
    id: '5',
    title: "What if there's a problem during my stay?",
    text: 'Contact your host first via our messaging system. If unresolved, our 24/7 support team is always available with a satisfaction guarantee.',
  },
  {
    id: '6',
    title: 'How does the refund process work?',
    text: "Refunds process within 5–7 business days to your original payment method. The amount depends on your booking's cancellation policy.",
  },
];

export function FaqList() {
  return (
    <Accordion>
      {FAQ.map(({ id, title, text }) => (
        <AccordionItem key={id} value={id}>
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{text}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
