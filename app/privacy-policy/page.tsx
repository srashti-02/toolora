export default function PrivacyPolicyPage() {

  return (

    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-white/10">

        <div className="max-w-5xl mx-auto px-6 py-24">

          <span className="inline-block bg-purple-500/10 border border-purple-500/20 text-purple-400 px-5 py-2 rounded-full text-sm mb-6">
            Legal
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            Privacy Policy

          </h1>

          <p className="text-zinc-400 text-xl mt-8 max-w-3xl leading-relaxed">

            Learn how Toolora collects, uses, and protects user information while providing free online productivity tools.

          </p>

          <p className="text-zinc-500 text-sm mt-6">
            Last Updated: May 2026
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20">

        {/* INTRO */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6">
            Introduction
          </h2>

          <p className="text-zinc-300 text-lg leading-9 mb-6">

            Toolora respects your privacy and is committed to protecting your personal information.

          </p>

          <p className="text-zinc-300 text-lg leading-9">

            This Privacy Policy explains how we collect, use, and safeguard information when users access our website and online tools.

          </p>

        </div>

        {/* INFO COLLECTION */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6">
            Information We Collect
          </h2>

          <p className="text-zinc-300 text-lg leading-9 mb-6">

            Toolora may collect limited information to improve website performance and user experience.

          </p>

          <ul className="space-y-4 text-zinc-300 text-lg">

            <li>
              • Browser type and device information
            </li>

            <li>
              • Website usage analytics
            </li>

            <li>
              • IP address and general location data
            </li>

            <li>
              • Cookies and performance tracking data
            </li>

          </ul>

        </div>

        {/* HOW WE USE */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6">
            How We Use Information
          </h2>

          <p className="text-zinc-300 text-lg leading-9 mb-6">

            Information collected may be used to:

          </p>

          <ul className="space-y-4 text-zinc-300 text-lg">

            <li>
              • Improve website functionality
            </li>

            <li>
              • Enhance user experience
            </li>

            <li>
              • Monitor website performance
            </li>

            <li>
              • Prevent abuse and security threats
            </li>

            <li>
              • Analyze traffic and usage patterns
            </li>

          </ul>

        </div>

        {/* COOKIES */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6">
            Cookies
          </h2>

          <p className="text-zinc-300 text-lg leading-9">

            Toolora may use cookies and third-party analytics tools to improve website functionality and understand user behavior. Users can disable cookies through browser settings if preferred.

          </p>

        </div>

        {/* THIRD PARTY */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6">
            Third-Party Services
          </h2>

          <p className="text-zinc-300 text-lg leading-9 mb-6">

            Toolora may use trusted third-party services including:

          </p>

          <ul className="space-y-4 text-zinc-300 text-lg">

            <li>
              • Google Analytics
            </li>

            <li>
              • Google AdSense
            </li>

            <li>
              • Hosting and performance services
            </li>

          </ul>

        </div>

        {/* ADSENSE */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6">
            Google AdSense
          </h2>

          <p className="text-zinc-300 text-lg leading-9">

            Third-party vendors including Google may use cookies to serve ads based on user visits to this and other websites. Google advertising cookies help display relevant advertisements to users.

          </p>

        </div>

        {/* SECURITY */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6">
            Data Security
          </h2>

          <p className="text-zinc-300 text-lg leading-9">

            Toolora takes reasonable security measures to protect website data and maintain platform security. However, no online platform can guarantee complete security.

          </p>

        </div>

        {/* USER RIGHTS */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6">
            User Rights
          </h2>

          <p className="text-zinc-300 text-lg leading-9">

            Users may request information about collected data or contact us regarding privacy-related concerns.

          </p>

        </div>

        {/* CONTACT */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6">
            Contact Us
          </h2>

          <p className="text-zinc-300 text-lg leading-9 mb-4">

            If you have questions regarding this Privacy Policy, you may contact us at:

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