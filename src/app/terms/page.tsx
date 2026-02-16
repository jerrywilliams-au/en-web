import { Navbar } from '@/components/branding/Navbar';
import { LegalFooter } from '@/components/branding/LegalFooter';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container max-w-4xl mx-auto px-6 py-32 space-y-8">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: February 2026</p>
        <div className="prose dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
            <p>By accessing or using jerrywilliams.au, including the Bootcamp, Platform, and Membership services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Services</h2>
            <p>Jerry Williams provides educational bootcamp programs, an AI-powered SaaS learning platform, and a curated membership community. Access to specific features depends on your enrollment and membership tier.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Accounts</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You must provide accurate and complete information during registration</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must notify us immediately of any unauthorized access</li>
              <li>One account per person — sharing accounts is not permitted</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Intellectual Property</h2>
            <p>All course content, platform code, templates, and materials are the intellectual property of Jerry Williams. You receive a personal, non-transferable license to use these materials for your own projects. You may not redistribute, resell, or share access to any content.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Acceptable Use</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use the platform only for lawful purposes</li>
              <li>Do not attempt to reverse-engineer or exploit the platform</li>
              <li>Do not harass, abuse, or harm other community members</li>
              <li>Do not share or redistribute proprietary course materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Payment &amp; Refunds</h2>
            <p>Payments are processed securely through third-party providers. Bootcamp fees are non-refundable once your cohort has started. Membership subscriptions can be cancelled at any time, effective at the end of the current billing period.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Limitation of Liability</h2>
            <p>Our services are provided &ldquo;as is.&rdquo; We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability shall not exceed the amount you paid for the services in the preceding 12 months.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Termination</h2>
            <p>We reserve the right to suspend or terminate your access if you violate these terms. You may close your account at any time by contacting us. Upon termination, your access to platform features and content will cease.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Changes to Terms</h2>
            <p>We may update these terms from time to time. Material changes will be communicated via email or a notice on the platform. Continued use after changes constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Governing Law</h2>
            <p>These terms are governed by the laws of Australia. Any disputes shall be resolved in the courts of South Australia.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Contact</h2>
            <p>Questions about these terms? Email us at <a href="mailto:legal@jerrywilliams.au" className="text-cyan-500 hover:underline">legal@jerrywilliams.au</a></p>
          </section>
        </div>
      </main>
      <LegalFooter />
    </div>
  );
}
