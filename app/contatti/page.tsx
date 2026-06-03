import Link from "next/link";
export default function Contatti() {
  return (
    <main className="bg-[#f7f7f5] px-4 py-0 text-zinc-900">
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
    <div className="flex items-center gap-4">
      <img src="/logo.png" alt="Logo T.B. S.r.l." className="h-16 w-auto" />

      <div>
        <p className="text-2xl font-black text-red-700">T.B. S.r.l.</p>
        <p className="text-sm text-zinc-500">Qualità su strada</p>
      </div>
    </div>

    <nav className="hidden gap-8 text-sm font-semibold uppercase tracking-wide md:flex">
      <Link href="/">Home</Link>
      <Link href="/azienda">Azienda</Link>
      <Link href="/servizi">Servizi</Link>
      <Link href="/automezzi">Automezzi</Link>
      <Link href="/contatti">Contatti</Link>
    </nav>
  </div>
</header>

      <div className="mx-auto max-w-6xl">

        <h1 className="text-2xl font-black text-red-700 py-5 px-5">
          CONTATTI
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-600 px-5">
          Siamo a disposizione per informazioni, preventivi e richieste
          relative ai nostri servizi di trasporto e logistica.
        </p>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* INFO */}
          <div className="rounded-[2rem] bg-white p-10 shadow-xl">

            <h2 className="text-3xl font-black">
              Informazioni
            </h2>

            <div className="mt-8 space-y-6 text-lg text-zinc-600">

              <div>
                <p className="font-bold text-zinc-900">
                  Indirizzo
                </p>

                <p>
                Via dei Monti Lepini, km 5,700, 03023 Ceccano (FR)
                </p>
              </div>

              <div>
                <p className="font-bold text-zinc-900">
                  Telefono
                </p>

                <p>+39 0775 642063</p>
                <p>+39 3355773350</p>
              </div>

              <div>
                <p className="font-bold text-zinc-900">
                  Email
                </p>

                <p>
                  info@tbtrasporti.it
                </p>
              </div>
              <div>
                <p className="font-bold text-zinc-900">Dati fiscali</p>
                <p>P.IVA: 01597340601</p>
                <p>CCIA FR n.89423</p>
                <p>Cap.Soc. €10.400,00</p>
              </div>

            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[2rem] bg-white p-10 shadow-xl">

            <h2 className="text-3xl font-black">
              Scrivici
            </h2>

            <form className="mt-8 space-y-6">

              <input
                type="text"
                placeholder="Nome"
                className="w-full rounded-2xl border border-zinc-300 px-5 py-4 outline-none focus:border-red-700"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-2xl border border-zinc-300 px-5 py-4 outline-none focus:border-red-700"
              />

              <textarea
                placeholder="Messaggio"
                rows={6}
                className="w-full rounded-2xl border border-zinc-300 px-5 py-4 outline-none focus:border-red-700"
              />

              <button
                type="submit"
                className="rounded-full bg-red-700 px-8 py-4 font-bold text-white transition hover:bg-red-800"
              >
                Invia messaggio
              </button>

            </form>
        </div>
            <div className="lg:col-span-2 flex justify-center py-20">
                <div className="max-w-5xl w-full bg-white space-y-6 lg:col-span-2 w-full rounded-[2rem] flex shadow-2xl flex-col items-center p-6">
                    <iframe
                        src="https://www.google.com/maps?q=Via+dei+Monti+Lepini+km+5,700+Ceccano+Frosinone&output=embed"
                        className="h-[350px] w-full rounded-[1.5rem] md:h-[450px] lg:h-[520px]"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    />
            
                    <div className="mt-6 flex justify-center">
                        <a
                            href="https://maps.app.goo.gl/Md9WoE6be1s4ppfX9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-16 w-fit mt-6 flex justify-center inline-flex items-center  rounded-full bg-red-700 px-8 py-3 transition items-center text-base font-bold text-white transition hover:bg-red-800 md:text-lg shadow-lg"
                        >  
                            <span className="text-center text-lg md:text-xl leading-tight">Apri su Google Maps</span>  
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </main>
  );
}