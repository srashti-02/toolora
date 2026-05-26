export default function DisclaimerPage() {

  return (

    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-white/10">

        <div className="max-w-5xl mx-auto px-6 py-24">

          <span className="inline-block bg-purple-500/10 border border-purple-500/20 text-purple-400 px-5 py-2 rounded-full text-sm mb-6">
            Legal
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            Disclaimer

          </h1>

          <p className="text-zinc-400 text-xl mt-8 max-w-3xl leading-relaxed">

            Read important information regarding the use of Toolora and its online tools, content, and services.

          </p>

          <p className="text-zinc-500 text-sm mt-6">
            Last Updated: May 2026
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20">

        {/* GENERAL */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6">
            General Information
          </h2>

          <p className="text-zinc-300 text-lg leading-9">

            All information, tools, and services provided on Toolora are published in good faith and for general informational and educational purposes only.

          </p>

        </div>

        {/* NO WARRANTIES */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6">
            No Warranties
          </h2>

          <p className="text-zinc-300 text-lg leading-9">

            Toolora makes no warranties regarding the completeness, reliability, accuracy, or availability of website content and tools. Any action you take based on information from this website is strictly at your own risk.

          </p>

        </div>

        {/* TOOLS */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6">
            Online Tools Disclaimer
          </h2>

          <p className="text-zinc-300 text-lg leading-9 mb-6">

            Toolora provides various productivity and utility tools including:

          </p>

          <ul className="space-y-4 text-zinc-300 text-lg">

            <li>
              • Calculators
            </li>

            <li>
              • Text tools
            </li>

            <li>
              • Productivity utilities
            </li>

            <li>
              • File optimization tools
            </li>

            <li>
              • Educational utilities
            </li>

          </ul>

          <p className="text-zinc-300 text-lg leading-9 mt-6">

            While we aim to provide accurate results, Toolora does not guarantee error-free calculations or outputs.

          </p>

        </div>

        {/* EXTERNAL LINKS */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6">
            External Links
          </h2>

          <p className="text-zinc-300 text-lg leading-9">

            Toolora may contain links to third-party websites or services. We do not control or take responsibility for external content, privacy practices, or website policies.

          </p>

        </div>

        {/* ADS */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6">
            Advertising Disclaimer
          </h2>

          <p className="text-zinc-300 text-lg leading-9">

            Toolora may display advertisements through third-party advertising platforms such as Google AdSense. Ads displayed may be personalized based on user interests and browsing behavior.

          </p>

        </div>

        {/* PROFESSIONAL */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6">
            Professional Disclaimer
          </h2>

          <p className="text-zinc-300 text-lg leading-9">

            Information provided on Toolora should not be considered professional, legal, financial, academic, or technical advice. Users should independently verify important information when necessary.

          </p>

        </div>

        {/* LIMITATION */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6">
            Limitation of Liability
          </h2>

          <p className="text-zinc-300 text-lg leading-9">

            Toolora shall not be liable for any losses, damages, or issues arising from the use of website tools, services, or information.

          </p>

        </div>

        {/* CONSENT */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6">
            Consent
          </h2>

          <p className="text-zinc-300 text-lg leading-9">

            By using Toolora, you consent to this Disclaimer and agree to its terms.

          </p>

        </div>

        {/* CONTACT */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6">
            Contact Information
          </h2>

          <p className="text-zinc-300 text-lg leading-9 mb-4">

            If you have questions regarding this Disclaimer, you may contact us:

          </p>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <p className="text-white text-lg font-semibold mb-3">
              Toolora
            </p>

            <p className="text-zinc-400">
              Email: support@toolora.in
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}