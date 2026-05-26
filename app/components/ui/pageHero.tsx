interface PageHeroProps {
  badge: string;
  title: string;
  gradientText?: string;
  description: string;
}

export default function PageHero({
  badge,
  title,
  gradientText,
  description,
}: PageHeroProps) {

  return (

    <section className="border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-24 text-center">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-5 py-2 text-sm text-purple-300 mb-8">

          {badge}

        </div>

        {/* TITLE */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-6xl mx-auto">

          {title}

          {gradientText && (
            <>
              <br />

              <span className="bg-linear-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">

                {gradientText}

              </span>
            </>
          )}

        </h1>

        {/* DESCRIPTION */}
        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-10">

          {description}

        </p>

      </div>

    </section>
  );
}