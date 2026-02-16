import { Navbar } from '@/components/branding/Navbar';
import { LegalFooter } from '@/components/branding/LegalFooter';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container max-w-4xl mx-auto px-6 py-32 space-y-8">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: February 2026</p>
        <div className="prose dark:prose-invert max-w-none">
          <p>Welcome to Jerry Williams. By accessing our website, you agree to these terms.</p>
          {/* Content placeholder */}
        </div>
      </main>
      <LegalFooter />
    </div>
  );
}
