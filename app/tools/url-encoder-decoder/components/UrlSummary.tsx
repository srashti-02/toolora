import { UrlResult } from "../types";

interface UrlSummaryProps {
  result: UrlResult;
}

export default function UrlSummary({
  result,
}: UrlSummaryProps) {
  return (
    <section className="mt-20">

      <h2 className="mb-10 text-center text-4xl font-bold">

        Understanding URL Encoding

      </h2>

      <div className="grid gap-8 lg:grid-cols-2">

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

          <h3 className="mb-5 text-2xl font-bold">

            What Happened?

          </h3>

          <p className="leading-8 text-zinc-400">

            {result.mode === "encode"
              ? "The text has been converted into a URL-safe format by replacing reserved characters with percent-encoded values."
              : "The encoded URL has been converted back into its original readable format."}

          </p>

        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

          <h3 className="mb-5 text-2xl font-bold">

            Why URL Encoding?

          </h3>

          <p className="leading-8 text-zinc-400">

            URL encoding ensures that special characters,
            spaces, and symbols are transmitted safely in
            URLs without causing errors in browsers or web
            servers.

          </p>

        </div>

      </div>

      <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h3 className="mb-6 text-2xl font-bold">

          Common Uses

        </h3>

        <div className="grid gap-5 md:grid-cols-2">

          <InfoCard
            title="🌐 Web Development"
            description="Encode query parameters before sending them in URLs."
          />

          <InfoCard
            title="🔗 Sharing Links"
            description="Prevent links from breaking when they contain spaces or special characters."
          />

          <InfoCard
            title="📡 APIs"
            description="Encode request parameters when calling REST APIs."
          />

          <InfoCard
            title="🧑‍💻 Programming"
            description="Safely transmit user input through URLs."
          />

        </div>

      </div>

      <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h3 className="mb-6 text-2xl font-bold">

          Common Encoded Characters

        </h3>

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead>

              <tr className="border-b border-zinc-700">

                <th className="py-3">Character</th>

                <th className="py-3">Encoded</th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b border-zinc-800">

                <td className="py-3">Space</td>

                <td>%20</td>

              </tr>

              <tr className="border-b border-zinc-800">

                <td className="py-3">@</td>

                <td>%40</td>

              </tr>

              <tr className="border-b border-zinc-800">

                <td className="py-3">&</td>

                <td>%26</td>

              </tr>

              <tr className="border-b border-zinc-800">

                <td className="py-3">?</td>

                <td>%3F</td>

              </tr>

              <tr>

                <td className="py-3">=</td>

                <td>%3D</td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}

interface InfoCardProps {
  title: string;
  description: string;
}

function InfoCard({
  title,
  description,
}: InfoCardProps) {
  return (
    <div className="rounded-2xl bg-black p-5">

      <h4 className="font-semibold">

        {title}

      </h4>

      <p className="mt-3 leading-7 text-zinc-400">

        {description}

      </p>

    </div>
  );
}