import Link from "next/link";
export default function Automezzi() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] px-4 py-0 text-zinc-900">
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
      <h1 className="text-2xl font-black text-red-700 py-5 px-5">
        AUTOMEZZI
      </h1>

      <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-600 px-5">
        Noi di T.B. Srl crediamo che per garantire la piena soddisfazione 
        del cliente sia fondamentale un'accurata selezione dei migliori automezzi. 
        Per questo, la nostra flotta viene costantemente aggiornata e nel corso 
        degli ultimi anni abbiamo consolidato una struttura operativa coniugata 
        con una forza lavoro che conta oggi dipendenti e partership con operatori 
        locali ed esteri.
      </p>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
          <img
            src="camion4.jpeg"
            alt="Automezzi T.B. S.r.l."
            className="h-[320px] w-full object-cover"
          />

          <div className="p-8">
            <h2 className="text-3xl font-black">
              Mezzi isotermici
            </h2>

            <p className="mt-4 leading-8 text-zinc-600">
              I nostri veicoli sono progettati per mantenere condizioni controllate
              durante il trasporto di merci sensibili alla temperatura richiesta.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
          <img
            src="camion3.jpeg"
            alt="Flotta aziendale"
            className="h-[320px] w-full object-cover"
          />

          <div className="p-8">
            <h2 className="text-3xl font-black">
              Flotta moderna
            </h2>

            <p className="mt-4 leading-8 text-zinc-600">
              Investiamo continuamente in tecnologie e mezzi di ultima
              generazione per offrire standard qualitativi elevati.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
          <img
            src="camion8.jpg"
            alt="Flotta aziendale"
            className="h-[320px] w-full object-cover"
          />

          <div className="p-8">
            <h2 className="text-3xl font-black">
             Cisterne per prodotti liquidi alimentari 
            </h2>

            <p className="mt-4 leading-8 text-zinc-600">
              La nostra flotta include cisterne specializzate per il trasporto
              di prodotti liquidi alimentari a temperatura controllata, garantendo sicurezza e igiene.
            </p>
            
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
          <img
            src="camion23.jpg"
            alt="Flotta aziendale"
            className="h-[320px] w-full object-cover"
          />

          <div className="p-8">
            <h2 className="text-3xl font-black">Automezzi ad energia alternativa</h2>

            <p className="mt-4 leading-8 text-zinc-600">
              La nostra azienda dispone di veicoli a LNG a basso impatto ambientale.
            </p>
          </div>
        </div>

      </div>

      <a
        href="/contatti"
        className="mt-5 inline-block rounded-full bg-red-700 px-10 py-6 font-bold text-white transition hover:bg-red-800"
      >
        Contattaci
      </a>

    </main>
  );
}