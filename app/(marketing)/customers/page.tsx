import CaseStudy from '@/components/CaseStudy';

export const metadata = { title: 'Customers' };

export default function CustomersPage() {
  return (
    <main className="container container-gutter py-16 md:py-24">
      <h1 className="font-semibold">Customer stories</h1>
      <p className="mt-2 max-w-2xl text-black/70 dark:text-white/70">Real teams who grew faster with PulseTrack.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <CaseStudy
          logo="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=256&auto=format&fit=crop"
          company="LumaCloud"
          problem="Fragile spreadsheet reporting, unclear KPI definitions across platforms."
          solution="PulseTrack unified metrics and automated weekly exports to executives."
          result="Reporting time cut 60%. CTR +31%. Paid social CAC down 18%."
          quote="PulseTrack paid for itself in the first month. We finally made decisions with confidence."
          person="Renee Curtis, Head of Growth"
        />
        <CaseStudy
          logo="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=256&auto=format&fit=crop"
          company="Northpeak"
          problem="Couldn’t see trending posts until it was too late to capitalize."
          solution="Alerts flagged breakout posts and nudged creators to iterate while hot."
          result="Engagement rate +22%. Conversion from social landing pages +15%."
          quote="It feels like a coach watching our channels 24/7."
          person="David Wong, Performance Lead"
        />
      </div>
    </main>
  );
}