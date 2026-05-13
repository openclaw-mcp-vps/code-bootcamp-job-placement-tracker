export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          LinkedIn-verified data
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Track <span className="text-[#58a6ff]">Real</span> Bootcamp Job Placement Rates
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop trusting marketing brochures. We scrape LinkedIn profiles of actual graduates to verify placement rates, job titles, and salaries — so you can choose a bootcamp with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Access — $5/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl font-bold text-[#58a6ff]">50+</div>
            <div className="text-sm text-[#8b949e] mt-1">Bootcamps tracked</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl font-bold text-[#58a6ff]">12k+</div>
            <div className="text-sm text-[#8b949e] mt-1">Profiles verified</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl font-bold text-[#58a6ff]">Real</div>
            <div className="text-sm text-[#8b949e] mt-1">Salary data</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Full Access</div>
          <div className="text-5xl font-bold text-white mb-1">$5<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Cancel anytime. No contracts.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Verified placement rates for 50+ bootcamps",
              "Median salary by bootcamp & tech stack",
              "Time-to-hire distribution charts",
              "Monthly data refreshes via LinkedIn scraping",
              "Compare bootcamps side by side"
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start for $5/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How do you verify placement data?</h3>
            <p className="text-[#8b949e] text-sm">We scrape public LinkedIn profiles of graduates listed by each bootcamp, cross-reference job titles and employers, and calculate real placement rates — not self-reported surveys.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How often is the data updated?</h3>
            <p className="text-[#8b949e] text-sm">Our background jobs re-scrape LinkedIn profiles monthly so you always see current employment status, not stale cohort snapshots from years ago.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription?</h3>
            <p className="text-[#8b949e] text-sm">Yes — cancel anytime from your billing portal. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        © {new Date().getFullYear()} BootcampVerify. All rights reserved.
      </footer>
    </main>
  );
}
