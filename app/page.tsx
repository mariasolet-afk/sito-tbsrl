import Image from "next/image"
import Link from "next/link";  
export default function Home() {
  return ( 
    <main className="rounded-3xl min-h-screen bg-white bg-[#f3f3f0] text-zinc-900">
      <header className="sticky top-0 z-50 items-center justify-between border-b border-zinc-200 bg-red backdrop-blur px-10 py-6 lg:px-20">

        <div className="mx-auto flex max-w-7xl justify-between px-6 py-5 lg:px-10 rounded-3xl gap-4">

          <img
            src="/logo.png"
            alt="Logo TB"
            className="h-30 w-auto"
          />
        
        <div>
          <p className="text-2xl font-black text-red-700">T.B. S.r.l.</p>
          <p className="mt-1 text-sm text-zinc-500 uppercase">Qualità su strada</p>
        </div>
      </div>
    
      <nav className="hidden gap-8 text-sm font-bold uppercase tracking-wide text-zinc-800 md:flex">
        <Link className="text-red-700" href="/">HOME</Link>
        <Link href="/azienda">AZIENDA</Link>
        <Link href="/servizi">SERVIZI</Link>
        <Link href="/automezzi">AUTOMEZZI</Link>
        <Link href="/contatti">CONTATTI</Link>
      </nav>
    </header>
    
    <section className="mx-auto rounded-3xl relative overflow-hidden bg-black text-white min-h-[820px] md:min-h-[720px]">
      <div className="grid min-h-[820px] grid-cols-1 lg:min-h-[720px] lg:grid-cols-2">
        <div className="relative z-10 flex items-center bg-white px-10 py-24 lg:px-20">
          <div className="max-w-7xl">
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.35em] text-red-700">
              TRASPORTI NAZIONALI E INTERNAZIONALI
            </p>
      
            <h1 className="max-w-3x1 text-6xl font-black leading-tight tracking-tight">
              Qualità su strada 
              <br />
              per il trasporto merci
            </h1>
    
            <p className="mt-10 max-w-2xl text-2xl leading-10 text-zinc-600">
             Dal trasporto isotermico alla gestione dei carichi dedicati, 
             con un servizio orientato ad efficienza, puntualità e sicurezza.
            </p>

            <button className="mt-10 flex flex-col gap-4 sm:flex-row rounded-full bg-red-700 px-10 py-5 font-bold text-white text-lg shadow-lg">
              <Link href="/contatti" className="w-full rounded-full bg-red-700 px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition hover:bg-red-800 sm-w-auto">Contatta il nostro team</Link> 
              <Link href="/azienda" className="w-full rounded-full border border-zinc-300 bg-white px-8 py-4 text-lg font-bold transition hover:border-red-700 hover:text-red-700 sm:w-auto">Scopri l'azienda</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-[420px] overflow-hidden border border-zinc-200 bg-white h-[500px] text-white rounded-b-[60px] shadow-2x1 bg-gradient-to-br z-10 mx-auto max-w-7xl px-6 pb-40 pt-24 md:px-10 md:py-44 md:h-[800px] md:rounded-b-[120px]">
        <img
          src="/camion .jpg"
          alt="Camion aziendale"
          width={1200}
          height={1000}
          className="h-full w-full absolute inset-0 object-cover object-center lg:scale-140"
        />
        <svg className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,160 C240,260 480,60 720,160 C960,260 1200,60 1440,160 L1440,500 L0,320 Z"
          />
        </svg>
        <div className="absolute bottom-[-200px] left-0 w-full h-[180px] rounded-[-100%] bg-[#f3f3f0]" />
      
      </div>
    </section>

    <section className="rounded-3xl grid gap-8 bg-zinc-50 px-10 py-16 md:grid-cols-3">
      <div className="rounded-3xl bg-white p-10 shadow-sm border border-zinc-100">
        <h2 className="text-3xl font-semibold">Trasporti isotermici</h2>
        <p className="mt-6 text-xl leading-9 text-zinc-600">
          Trasporto merci e surgelati con mezzi idonei al mantenimento 
          delle condizioni richieste dal prodotto.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-10 shadow-sm border border-zinc-100">
        <h2 className="text-3xl font-black">Centinati e groupage</h2>
        <p className="mt-6 text-xl leading-9 text-zinc-600">
          Soluzioni flessibili per carichi completi o parziali, 
          adatte alle esigenze di aziende e stabilimenti.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-10 shadow-sm border border-zinc-100">
        <h2 className="text-3xl font-black">Gestione magazzini</h2>
        <p className="mt-6 text-xl leading-9 text-zinc-600">
          Da oltre trent'anni offriamo supporto nelle attività di stoccaggio, movimentazione 
          e gestione documentale legata al trasporto.
        </p>
      </div>
     <section className="bg-zinc-900 px-6 py-16 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-4xl font-black">Hai bisogno di un trasporto?</h2>
            <p className="mt-4 text-zinc-300">
              Contattaci per ricevere informazioni, disponibilità e soluzioni su misura.
            </p>
          </div>

          <Link
            href="/contatti"
            className="rounded-full bg-red-700 px-8 py-4 font-bold text-white transition hover:bg-red-800 rounded-full border border-white/40 hover:bg-white hover:text-zinc-900"
          >
            Contattaci
          </Link>
        </div>
      </section>
    
    <section
      id="servizi"
      className="bg-white px-10 py-24 lg:px-20"
      >
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-red-700">SERVIZI</p>
          <h2 className="text-5xl font-black leading-tight"></h2>
        </div>
        <div>
          <p className="text-xl leading-9 text-zinc-600"></p>
          <p className="mt-6 text-xl leading-9 text-zinc-600"></p>
        </div>
      </div>
    </section>
    <section
      id="mezzi"
      className="bg-white px-10 py-24 lg:px-20"
      >
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-red-700">AUTOMEZZI</p>
          <h2 className="text-5xl font-black leading-tight"></h2>
        </div>
        <div>
          <p className="text-xl leading-9 text-zinc-600"></p>
          <p className="mt-6 text-xl leading-9 text-zinc-600"></p>
        </div>
      </div>
    </section>
    <section
      id="contatti"
      className="bg-white px-10 py-24 lg:px-20"
      >
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-red-700">CONTATTI</p>
          <h2 className="text-5xl font-black leading-tight"></h2>
        </div>
        <div>
          <p className="text-xl leading-9 text-zinc-600"></p>
          <p className="mt-6 text-xl leading-9 text-zinc-600"></p>
        </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block h-[120px] w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 320"
            preserveAspectRatio="none">
          <path
            fill="#b80101"
            d="M0,160 C240,260 480,60 720,160 C960,260 1200,60 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
        </div>


      </div>
    </section>
    </section>
  </main>
 );
}




