import { Navbar } from '@/components/branding/Navbar';
import { LegalFooter } from '@/components/branding/LegalFooter';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container max-w-4xl mx-auto px-6 py-32 space-y-8">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: February 2026</p>
        <div className="prose dark:prose-invert max-w-none">
          <p>Your privacy is important to us. This policy explains how we collect and use your data.</p>
          {/* Content placeholder */}
        </div>
      </main>
      <LegalFooter />
    </div>
  );
}
