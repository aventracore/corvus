import Image from 'next/image';

export default function CaseStudy({ logo, company, problem, solution, result, quote, person }: { logo: string; company: string; problem: string; solution: string; result: string; quote: string; person: string }) {
  return (
    <article className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur p-6">
      <div className="flex items-center gap-3">
        <Image src={logo} alt="" width={40} height={40} className="rounded" />
        <h3 className="text-lg font-semibold">{company}</h3>
      </div>
      <div className="mt-4 grid gap-2 text-sm">
        <p><strong>Problem:</strong> {problem}</p>
        <p><strong>Solution:</strong> {solution}</p>
        <p><strong>Result:</strong> {result}</p>
      </div>
      <blockquote className="mt-4 text-sm italic">“{quote}” — {person}</blockquote>
    </article>
  );
}