import { Navbar } from '@/components/branding/Navbar';
import { Footer } from '@/components/branding/Footer';
import { GlassOrbs } from '@/components/branding/GlassOrbs';
import { WaitlistForm } from '@/components/branding/WaitlistForm';

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-background font-sans relative flex flex-col">
      <GlassOrbs />
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-20 px-6 relative z-10">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build the Future. <br />
              <span className="text-gradient">Before Everyone Else.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto">
              Join the waiting list for the Jerry Williams AI Architecture Academy & Platform.
              Early access members get priority onboarding.
            </p>
          </div>

          <WaitlistForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
