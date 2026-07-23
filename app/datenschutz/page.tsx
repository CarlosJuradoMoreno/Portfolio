import Link from "next/link";

export const metadata = {
  title: "Datenschutzerklärung | Carlos Jurado Moreno",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen py-20 text-white">
      <article className="container-shell max-w-3xl">
        <Link href="/" className="text-sm text-accent transition hover:text-white">
          ← Zurück zum Portfolio
        </Link>

        <h1 className="mt-10 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Datenschutzerklärung
        </h1>
        <p className="mt-4 text-sm text-white/40">Stand: Juli 2026</p>

        <div className="mt-10 space-y-10 leading-7 text-muted">
          <LegalSection title="1. Verantwortlicher">
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
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
            <p className="mt-4">
              E-Mail:{" "}
              <a
                href="mailto:carlosjurado.dev@mail.online-impressum.de"
                className="text-accent transition hover:text-white"
              >
                carlosjurado.dev@mail.online-impressum.de
              </a>
            </p>
          </LegalSection>

          <LegalSection title="2. Hosting">
            <p>
              Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA,
              gehostet.
            </p>
            <p className="mt-4">
              Beim Aufruf dieser Website verarbeitet der Hostinganbieter technisch erforderliche
              Verbindungsdaten. Dazu können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs,
              aufgerufene Seiten, Browsertyp, Betriebssystem und Referrer-URL gehören.
            </p>
            <p className="mt-4">
              Die Verarbeitung erfolgt, um die Website sicher und zuverlässig bereitzustellen und
              technische Störungen zu erkennen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das
              berechtigte Interesse liegt im sicheren und störungsfreien Betrieb dieser Website.
            </p>
            <p className="mt-4">
              Eine Verarbeitung von Daten in den USA kann nicht ausgeschlossen werden. Weitere
              Informationen finden Sie in der{" "}
              <a
                href="https://vercel.com/legal/privacy-notice"
                target="_blank"
                rel="noreferrer"
                className="text-accent transition hover:text-white"
              >
                Datenschutzerklärung von Vercel
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection title="3. Speicherung der Spracheinstellung">
            <p>
              Diese Website speichert die ausgewählte Sprache lokal im Browser („Local Storage“),
              damit die Spracheinstellung bei einem späteren Besuch erhalten bleibt. Die Information
              wird nicht zu Analyse- oder Werbezwecken verwendet.
            </p>
            <p className="mt-4">
              Die Speicherung erfolgt zur Bereitstellung der gewünschten Funktion gemäß § 25 Abs. 2
              Nr. 2 TDDDG. Die Einstellung kann jederzeit durch das Löschen der Browserdaten entfernt
              werden.
            </p>
          </LegalSection>

          <LegalSection title="4. Kontaktaufnahme per E-Mail">
            <p>
              Wenn Sie mich per E-Mail kontaktieren, werden die übermittelten Angaben zur Bearbeitung
              Ihrer Anfrage verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn die
              Anfrage der Anbahnung eines Vertrags- oder Beschäftigungsverhältnisses dient. In anderen
              Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p className="mt-4">
              Die Daten werden gelöscht, sobald sie für die Bearbeitung der Anfrage nicht mehr
              erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </LegalSection>

          <LegalSection title="5. Externe Links">
            <p>
              Diese Website enthält Links zu externen Diensten, insbesondere GitHub und LinkedIn. Eine
              Verbindung zu diesen Diensten wird erst hergestellt, wenn Sie den jeweiligen Link
              anklicken. Für die Datenverarbeitung auf den verlinkten Websites ist der jeweilige
              Anbieter verantwortlich.
            </p>
          </LegalSection>

          <LegalSection title="6. Rechte betroffener Personen">
            <p>Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf:</p>
            <ul className="mt-4 list-disc space-y-1 pl-6">
              <li>Auskunft über Ihre personenbezogenen Daten,</li>
              <li>Berichtigung unrichtiger Daten,</li>
              <li>Löschung oder Einschränkung der Verarbeitung,</li>
              <li>Widerspruch gegen die Verarbeitung,</li>
              <li>Datenübertragbarkeit und</li>
              <li>Beschwerde bei einer Datenschutzaufsichtsbehörde.</li>
            </ul>
            <p className="mt-4">
              Zur Ausübung Ihrer Rechte können Sie sich an{" "}
              <a
                href="mailto:carlosjurado.dev@mail.online-impressum.de"
                className="text-accent transition hover:text-white"
              >
                carlosjurado.dev@mail.online-impressum.de
              </a>{" "}
              wenden.
            </p>
          </LegalSection>

          <LegalSection title="7. Beschwerderecht">
            <p>
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig
              ist insbesondere die Datenschutzaufsichtsbehörde des Bundeslandes, in dem Sie wohnen.
            </p>
          </LegalSection>
        </div>
      </article>
    </main>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
