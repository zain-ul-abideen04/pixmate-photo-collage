import Link from "next/link";

export default function PricingPlans({ content }) {
  const { hero, plans, note } = content;

  return (
    <section className="bg-[#C8005D] px-6 py-16 text-white lg:px-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-[#6BC9DB] md:text-6xl">
          {hero?.title}
        </h1>
        <p className="mt-4 text-lg text-white/90 md:text-xl">{hero?.subtitle}</p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-3">
        {(plans || []).map((plan, i) => (
          <div
            key={i}
            className={`flex flex-col rounded-3xl p-8 shadow-2xl ${
              plan.highlight
                ? "bg-white text-neutral-900 ring-4 ring-[#E8A317] md:-translate-y-4"
                : "bg-white/10 text-white ring-1 ring-white/30"
            }`}
          >
            {plan.highlight && (
              <span className="mb-4 w-fit rounded-full bg-[#E8A317] px-4 py-1 text-sm font-semibold text-[#8A0042]">
                Most popular
              </span>
            )}

            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <p className={`mt-1 ${plan.highlight ? "text-neutral-500" : "text-white/80"}`}>
              {plan.description}
            </p>

            <p className="mt-6 flex items-end gap-1">
              <span className="text-5xl font-extrabold">{plan.price}</span>
              <span className={plan.highlight ? "text-neutral-500" : "text-white/80"}>
                {plan.period}
              </span>
            </p>

            <ul className="mt-6 flex-1 space-y-3">
              {(plan.features || []).map((f, j) => (
                <li key={j} className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                    <circle cx="12" cy="12" r="11" fill={plan.highlight ? "#6BC9DB" : "#ffffff33"} />
                    <path d="M7 12.5l3.2 3.2L17 9" stroke={plan.highlight ? "#8A0042" : "#fff"} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href={plan.link || "#"}
              className={`mt-8 block rounded-full py-3.5 text-center text-lg font-semibold transition hover:-translate-y-0.5 ${
                plan.highlight
                  ? "bg-[#C8005D] text-white hover:bg-[#8A0042]"
                  : "bg-[#6BC9DB] text-[#8A0042] hover:bg-[#E8A317]"
              }`}
            >
              {plan.button}
            </Link>
          </div>
        ))}
      </div>

      {note && <p className="mt-12 text-center text-white/80">{note}</p>}
    </section>
  );
}