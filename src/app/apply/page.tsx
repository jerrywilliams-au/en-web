import { Navbar } from '@/components/branding/Navbar';
import { LegalFooter } from '@/components/branding/LegalFooter';
import { CtaSection } from '@/components/branding/CtaSection';

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
         <CtaSection />
      </main>
      <LegalFooter />
    </div>
  );
}
