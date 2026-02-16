import { Navbar } from '@/components/branding/Navbar';
import { LegalFooter } from '@/components/branding/LegalFooter';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container max-w-4xl mx-auto px-6 py-32 space-y-8">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: February 2026</p>
        <div className="prose dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold">Our Commitment</h2>
            <p>Your privacy matters. We collect only what we need to provide the bootcamp, platform, and membership services. We never sell your data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Account information (name, email)</li>
              <li>Application details (project info, learning preferences)</li>
              <li>Platform usage data (how you use the tools)</li>
              <li>Payment information (processed securely via third-party)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide bootcamp, platform, and membership services</li>
              <li>To communicate about your enrollment and progress</li>
              <li>To improve our offerings and user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Data Security</h2>
            <p>All data is encrypted at rest and in transit. We use industry-standard security practices to protect your information. You can export or delete your data at any time.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Third-Party Services</h2>
            <p>We use trusted third-party services for payments, email, and hosting. These services have their own privacy policies and security practices.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Your Rights</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access your data at any time</li>
              <li>Export your data in a portable format</li>
              <li>Request corrections to your data</li>
              <li>Delete your account and data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Contact</h2>
            <p>Questions about privacy? Email us at <a href="mailto:privacy@jerrywilliams.au" className="text-cyan-500 hover:underline">privacy@jerrywilliams.au</a></p>
          </section>
        </div>
      </main>
      <LegalFooter />
    </div>
  );
}
