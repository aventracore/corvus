export const metadata = { title: 'Privacy' };

export default function PrivacyPage() {
  return (
    <main className="container container-gutter prose prose-slate dark:prose-invert py-16">
      <h1>Privacy Policy</h1>
      <p>Last updated: May 2025</p>
      <p>
        PulseTrack collects only the data needed to provide analytics and insights. We never sell your data. This
        policy explains what we collect, how we use it, and your rights.
      </p>
      <h2>Data we process</h2>
      <ul>
        <li>Account details: name, email, and organization.</li>
        <li>OAuth tokens to connect social platforms (encrypted at rest).</li>
        <li>Usage logs to improve reliability and performance.</li>
      </ul>
      <h2>How we use data</h2>
      <p>We use data to deliver the service, troubleshoot issues, and improve features. We do not use customer data to train models.</p>
      <h2>Security</h2>
      <p>We use industry best practices including encryption in transit and at rest, least-privilege access, audit logs, and regular penetration testing.</p>
      <h2>Your rights</h2>
      <p>Contact us to access, correct, or delete your data. For DPA or SCCs, reach out at legal@pulsetrack.com.</p>
    </main>
  );
}