import { ConverterResult } from "../types";

interface ConverterSummaryProps {
  result: ConverterResult;
}

export default function ConverterSummary({
  result,
}: ConverterSummaryProps) {
  const info = getCategoryInfo(result.category);

  return (
    <section className="mt-16">

      <h2 className="mb-8 text-center text-4xl font-bold">
        Learn About {info.title}
      </h2>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Formula */}

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

          <h3 className="mb-5 text-2xl font-bold">
            📐 Conversion Formula
          </h3>

          <div className="rounded-2xl bg-black p-6">

            <code className="text-xl text-violet-400">

              {result.formula}

            </code>

          </div>

          <p className="mt-6 leading-8 text-zinc-400">

            This conversion follows internationally
            accepted conversion standards to provide
            accurate results.

          </p>

        </div>

        {/* Explanation */}

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

          <h3 className="mb-5 text-2xl font-bold">

            💡 Explanation

          </h3>

          <p className="leading-8 text-zinc-400">

            {result.explanation}

          </p>

        </div>

      </div>

      {/* Common Uses */}

      <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h3 className="mb-6 text-2xl font-bold">

          🌍 Common Uses

        </h3>

        <div className="grid gap-5 md:grid-cols-2">

          {info.examples.map((item) => (

            <div
              key={item.title}
              className="rounded-2xl bg-black p-5"
            >

              <h4 className="font-semibold">

                {item.title}

              </h4>

              <p className="mt-3 text-zinc-400 leading-7">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

function getCategoryInfo(category: string) {

  switch (category) {

    case "length":
      return {
        title: "Length Conversion",
        examples: [
          {
            title: "Construction",
            description:
              "Convert meters, feet and inches for building projects.",
          },
          {
            title: "Travel",
            description:
              "Convert kilometers into miles while travelling.",
          },
          {
            title: "Engineering",
            description:
              "Use accurate unit conversions for technical drawings.",
          },
          {
            title: "Education",
            description:
              "Useful for mathematics and physics calculations.",
          },
        ],
      };

    case "weight":
      return {
        title: "Weight Conversion",
        examples: [
          {
            title: "Fitness",
            description:
              "Convert kilograms into pounds for workouts.",
          },
          {
            title: "Cooking",
            description:
              "Convert grams and ounces in recipes.",
          },
          {
            title: "Shipping",
            description:
              "Calculate parcel weight using different units.",
          },
          {
            title: "Science",
            description:
              "Use accurate measurements during experiments.",
          },
        ],
      };

    case "temperature":
      return {
        title: "Temperature Conversion",
        examples: [
          {
            title: "Weather",
            description:
              "Convert Celsius to Fahrenheit quickly.",
          },
          {
            title: "Cooking",
            description:
              "Follow recipes using different temperature scales.",
          },
          {
            title: "Laboratories",
            description:
              "Convert temperatures for scientific experiments.",
          },
          {
            title: "Travel",
            description:
              "Understand weather forecasts abroad.",
          },
        ],
      };

    case "storage":
      return {
        title: "Storage Conversion",
        examples: [
          {
            title: "Computer Files",
            description:
              "Convert MB, GB and TB for storage devices.",
          },
          {
            title: "Cloud Storage",
            description:
              "Estimate cloud storage requirements.",
          },
          {
            title: "Downloads",
            description:
              "Understand file sizes before downloading.",
          },
          {
            title: "Backups",
            description:
              "Manage disk space efficiently.",
          },
        ],
      };

    case "time":
      return {
        title: "Time Conversion",
        examples: [
          {
            title: "Scheduling",
            description:
              "Convert hours into minutes and seconds.",
          },
          {
            title: "Project Planning",
            description:
              "Estimate task durations accurately.",
          },
          {
            title: "Education",
            description:
              "Useful in mathematics and science problems.",
          },
          {
            title: "Sports",
            description:
              "Compare race timings using different units.",
          },
        ],
      };

    case "speed":
      return {
        title: "Speed Conversion",
        examples: [
          {
            title: "Driving",
            description:
              "Convert km/h into mph while travelling.",
          },
          {
            title: "Aviation",
            description:
              "Understand speed in knots.",
          },
          {
            title: "Engineering",
            description:
              "Convert between m/s and km/h.",
          },
          {
            title: "Sports",
            description:
              "Compare running and cycling speeds.",
          },
        ],
      };

    default:
      return {
        title: "Unit Conversion",
        examples: [],
      };
  }
}