'use client';

export function FAQSection() {
  const faqs = [
    {
      q: "Do I need to be a technical expert?",
      a: "You need to be comfortable writing code, but you don't need to be a senior architect. The platform handles the deep infrastructure. If you can build a React app and a basic API, you're ready."
    },
    {
      q: "What is the cost?",
      a: "The 8-Week Bootcamp tuition varies by cohort. The Platform Membership is $99/month after the program ends for ongoing updates and community access."
    },
    {
      q: "Can I get a refund?",
      a: "Yes. If you decide the program isn't for you within the first week (Spiral Iteration #1), we offer a full refund. No questions asked."
    },
    {
      q: "Do I own my IP?",
      a: "100%. Everything you build, including the platform boilerplate code you customize, is your intellectual property. We claim zero equity."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-black/5 dark:bg-white/5">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Frequently Answered <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group glass-1 rounded-xl open:bg-cyan-500/5 open:border-cyan-500/30 transition-all duration-300">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg select-none">
                {faq.q}
                <span className="transform group-open:rotate-180 transition-transform duration-300 text-cyan-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
