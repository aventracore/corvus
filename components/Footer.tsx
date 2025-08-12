import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-24" aria-label="Footer">
      <div className="container container-gutter py-12 grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <Logo />
          <p className="text-sm text-black/70 dark:text-white/70 max-w-sm">
            PulseTrack helps modern brands turn social signals into revenue. We unify analytics, insights, and reporting so you can act faster.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="link-underline">Features</Link></li>
              <li><Link href="/pricing" className="link-underline">Pricing</Link></li>
              <li><Link href="/customers" className="link-underline">Customers</Link></li>
              <li><Link href="/blog" className="link-underline">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="link-underline">About</Link></li>
              <li><Link href="/contact" className="link-underline">Contact</Link></li>
              <li><Link href="/privacy" className="link-underline">Privacy</Link></li>
              <li><Link href="/terms" className="link-underline">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-sm text-black/60 dark:text-white/60">
          <p>© {new Date().getFullYear()} PulseTrack Inc.</p>
          <p className="mt-2">Cover imagery by creators on Unsplash. See credits in README.</p>
        </div>
      </div>
    </footer>
  );
}