import Link from "next/link";

export default function SimplePage({ content }) {
  const { title, subtitle, button, items, cta } = content;

  return (
    <>
      <section className="bg-[#C8005D] px-6 py-20 text-white lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-[#6BC9DB] md:text-6xl">{title}</h1>
          <p className="mt-5 text-lg text-white/90 md:text-xl">{subtitle}</p>
          {button?.text && (
            <Link
              href={button.link || "#"}
              className="mt-8 inline-block rounded-full bg-[#E8A317] px-10 py-3.5 text-lg font-semibold text-[#8A0042] transition hover:-translate-y-0.5 hover:bg-[#6BC9DB]"
            >
              {button.text}
            </Link>
          )}
        </div>
      </section>

      <section className="bg-[#8A0042] px-6 py-16 text-white lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(items || []).map((item, i) => (
            <div key={i} className="rounded-3xl bg-white/10 p-8 ring-1 ring-white/25 transition hover:-translate-y-1 hover:bg-white/15">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6BC9DB] text-xl font-bold text-[#8A0042]">
                {i + 1}
              </span>
              <h2 className="mt-5 text-xl font-bold text-[#E8A317]">{item.title}</h2>
              <p className="mt-2 text-white/90">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {cta?.title && (
        <section className="bg-[#C8005D] px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-extrabold md:text-4xl">{cta.title}</h2>
          <Link
            href={cta.link || "#"}
            className="mt-6 inline-block rounded-full bg-[#6BC9DB] px-10 py-3.5 text-lg font-semibold text-[#8A0042] transition hover:bg-[#E8A317]"
          >
            {cta.button}
          </Link>
        </section>
      )}
    </>
  );
}