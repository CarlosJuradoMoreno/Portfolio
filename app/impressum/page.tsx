import Link from "next/link";

export const metadata = {
  title: "Impressum | Carlos Jurado Moreno",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen py-20 text-white">
      <article className="container-shell max-w-3xl">
        <Link href="/" className="text-sm text-accent transition hover:text-white">
          ← Zurück zum Portfolio
        </Link>

        <h1 className="mt-10 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Impressum
        </h1>

        <div className="mt-10 space-y-8 leading-7 text-muted">
          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              Angaben gemäß § 5 DDG und § 18 Abs. 1 MStV
            </h2>
            <address className="mt-4 not-italic">
              Carlos Jurado Moreno
              <br />
              c/o Online-Impressum #9691
              <br />
              Europaring 90
              <br />
              53757 St Augustin
              <br />
              Deutschland
            </address>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">Kontakt</h2>
            <p className="mt-4">
              E-Mail:{" "}
              <a
                href="mailto:carlosjurado.dev@mail.online-impressum.de"
                className="text-accent transition hover:text-white"
              >
                carlosjurado.dev@mail.online-impressum.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              Zuständige Regulierungs- und Aufsichtsbehörde
            </h2>
            <p className="mt-4">
              Landesanstalt für Medien Nordrhein-Westfalen
              <br />
              Sitz: Deutschland
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
