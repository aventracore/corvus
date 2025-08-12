import Pricing from '@/components/Pricing';

export const metadata = { title: 'Pricing' };

export default function PricingPage() {
  return (
    <main>
      <section className="container container-gutter pt-12">
        <h1 className="font-semibold">Simple, predictable pricing</h1>
        <p className="mt-2 max-w-2xl text-black/70 dark:text-white/70">Choose monthly or annual billing and scale seats as you grow. Cancel anytime.</p>
      </section>
      <Pricing />
      <section className="container container-gutter pb-16">
        <h2 className="font-semibold">Billing FAQs</h2>
        <ul className="mt-4 grid gap-4 text-sm">
          <li><strong>Can I change plans later?</strong> Yes, upgrades prorate instantly. Downgrades take effect next cycle.</li>
          <li><strong>Do you offer trials?</strong> Every plan starts with a 14-day free trial. No card required.</li>
          <li><strong>What payment methods?</strong> All major cards and invoice on Pro.</li>
        </ul>
      </section>
    </main>
  );
}