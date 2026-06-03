import Link from "next/link";
export default function Azienda() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-zinc-900">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Logo T.B. S.r.l."
              className="h-16 w-auto"
            />

            <div>
              <p className="text-2xl font-black text-red-700">T.B. S.r.l.</p>
              <p className="text-sm text-zinc-500">Qualità su strada</p>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm font-semibold uppercase tracking-wide md:flex">
            <Link href="/">Home</Link>
            <Link href="/azienda" className="text-red-700">Azienda</Link>
            <Link href="/servizi">Servizi</Link>
            <Link href="/automezzi">Automezzi</Link>
            <Link href="/contatti">Contatti</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">

        <img
          src="/capannone3.png"
          alt="Azienda T.B. S.r.l."
          className="h-[700px] w-full inset-0 object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-400">
              Azienda
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-tight text-white lg:text-7xl">
              Esperienza, affidabilità e qualità nel trasporto merci.
            </h1>
          </div>
        </div>
      </section>

      {/* CONTENUTO */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid gap-16 lg:grid-cols-2">

          <div>
            <img
              src="/imm.azienda.png"
              alt="Flotta T.B. S.r.l."
              className="overflow-hidden rounded-[2rem] shadow-xl h-full w-full object-cover bg-red-700"
            />
          </div>

          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-red-700">
              Chi siamo
            </p>

            <h2 className="text-4xl font-black leading-tight">
              Una realtà solida nel settore della logistica e dei trasporti.
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-8 text-zinc-600">

              <p>
                Fondata nel 1987, T.B. S.r.l. è una realtà consolidata nel
                settore dei trasporti e della logistica.
              </p>

              <p>
                Operiamo con professionalità nel trasporto isotermico e nella
                gestione di carichi dedicati, offrendo servizi affidabili,
                puntuali e costruiti sulle reali esigenze dei clienti.
              </p>

              <p>
                I nostri magazzini di Frosinone, situati strategicamente nel
                centro Italia, rappresentano un punto operativo fondamentale
                per la gestione efficiente delle merci.
              </p>

              <p>
                Crediamo che dietro ogni consegna non ci siano soltanto merci da trasportare, 
                ma responsabilità, fiducia e impegno.
                Per questo investiamo costantemente in mezzi moderni, tecnologie innovative
                e sostenibilità ambientale, mantenendo elevati standard di qualità e sicurezza.
              </p>

              <p>
                Il nostro vero valore è rappresentato dalle persone:
                un team giovane, competente e dinamico che affronta ogni giorno
                nuove sfide con passione, dedizione e spirito di collaborazione.
                È grazie a questi valori -trasparenza,dedizione e senso di appartenenza-
                che ogni giorno costruiamo rapporti solidi e duraturi con clienti e partner, continuando a crescere con la stessa determinazione di sempre.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 px-6 py-16 text-white lg:px-10">

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

          <div>
            <h2 className="text-4xl font-black">Vuoi collaborare con noi?</h2>

            <p className="mt-4 text-zinc-300">Contattaci per ricevere informazioni sui nostri servizi.</p>
          </div>

          <Link
            href="/contatti"
            className="rounded-full bg-red-700 px-8 py-4 font-bold text-white transition hover:bg-red-800">Contattaci</Link>

        </div>
      </section>

    </main>
  );
}
