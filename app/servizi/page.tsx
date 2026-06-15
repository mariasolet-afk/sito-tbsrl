import Link from "next/link";
export default function Servizi() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
    <div className="flex items-center gap-4">
      <img src="/logo.png" alt="Logo T.B. S.r.l." className="h-16 w-auto" />

      <div>
        <p className="text-2xl font-black text-red-700">T.B. S.r.l.</p>
        <p className="text-sm text-zinc-600">Qualità su strada</p>
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
    <h1 className="text-2xl font-bold font-black text-red-700 py-5 px-5">I NOSTRI SERVIZI</h1>
    <h1 className="text-5xl font-black leading-tight px-5">
        Soluzioni integrate per trasporto e logistica</h1>
    <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-600 px-5">
        Uno staff manageriale dinamico ed altamente professionale, formato da uomini di provata 
        esperienza e da giovani tecnici settorialmente specializzati, sono in funzione di servizi 
        di internal auditing e reporting supportati dai più avanzati sistemi informatici, garantisce 
        il continuo monitoraggio dei livelli di qualità, efficienza e puntualità del servizio.
    </p>
    <aside className="ml-auto lg:w-[45%] lg:grid-cols-4 top-50 rounded-[6rem] bg-white p-8 shadow-3xl">
      <h2 className="text-xl font-black text-red-700">
        COSA OFFRIAMO
      </h2>

      <ul className="mt-8 space-y-5 text-lg font-semibold text-zinc-700">
        <li>→ Trasporti isotermici</li>
        <li>→ Carichi dedicati nazionali e internazionali</li>
        <li>→ Logistica e movimentazione merci</li>
        <li>→Trasporti liquidi alimentari</li>
        <li>→ Groupage e soluzioni flessibili</li>
        <li>→ Monitoraggio qualità del servizio</li>
      </ul>
    </aside>
    <section className="bg-white px-6 py-20 lg:px-10">
  <div className="mx-auto max-w-7xl">
    <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-red-700">
      Partner
    </p>

    <h2 className="text-4xl font-black">
      Collaborazioni e realtà con cui operiamo.
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-zinc-200 p-8 text-center font-bold">
        Froneri
        <img src="/froneri.png" 
             alt="Froneri" 
             className="w-full h-auto mx-auto mt-4 h-16 w-auto object-contain"/>
      </div>

      <div className="rounded-3xl border border-zinc-200 p-8 text-center font-bold">
        Eskigel
        <img src="/eskigel.png" 
             alt="Eskigel" 
             className="w-full h-auto mx-auto mt-4 h-16 w-auto object-contain"/>
      </div>
        <div className="rounded-3xl border border-zinc-200 p-8 text-center font-bold">
            Salpa&Cherubini S.r.l.
            <img src="/salpa.png" 
             alt="Salpa&Cherubini S.r.l." 
             width={200}
             height={100}
             className=" object-contain w-full h-auto w-[400px] mx-auto mt-8 h-16 w-auto object-contain"/>
        </div>
    </div>
  </div>
</section>

    <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-red-700">Certificazioni</p>

        <h2 className="text-4xl font-black">Qualità, sicurezza e affidabilità</h2>
        <p className="mt-4 text-xl text-zinc-500">Lo standard qualitativo è riconosciuto dai più importanti organismi di certificazione nazionale ed internazionale EQNet, Centritrans, CISQ.</p>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
        <img
            src="/certificato1.png"
            alt="Certificazione 1"
            className="h-[320px] w-full rounded-xl object-contain mb-4"/>

              <h3 className="text-2xl font-black">Certificazione IQNET</h3>
              <p className="mt-4 text-zinc-600">Standard e procedure per garantire qualità operativa.</p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <img
                src="/certificazione 2.png"
                alt="Certificazione 2"
                className="h-[320px] w-full rounded-xl object-contain mb-4"/>

              <h3 className="text-2xl font-black">Certificazione CQY</h3>
              <p className="mt-4 text-zinc-600">
                Controllo e sicurezza nei processi di trasporto.
              </p>
            </div>
        </div>
        </div>
    </section>

    <section className="bg-zinc-900 px-6 py-16 text-white lg:px-10">
  <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
    <div>
      <h2 className="text-4xl font-black">Hai bisogno di una soluzione su misura?</h2>
      <p className="mt-4 text-zinc-300">
        Contattaci per ricevere informazioni sui nostri servizi.
      </p>
    </div>

    <a
      href="/contatti"
      className="rounded-full bg-red-700 px-8 py-4 font-bold text-white hover:bg-red-800">Contattaci
    </a>
    </div>
    </section>
      
    </main>
  );
}