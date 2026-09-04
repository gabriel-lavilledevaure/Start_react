function Header() {
  return (
    <header className="mb-12">
      <h1 className="text-5xl font-bold tracking-tight text-slate-900">Room</h1>
      <p className="mt-2 text-xl text-slate-400">
        5 people are around right now
      </p>
    </header>
  );
}

function User({ src, name, fonction }) {
  return (
    <div className="flex items-center gap-7 py-5">
      <img
        className="h-20 w-20 rounded-full object-cover"
        alt={name}
        src={src}
      />
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-semibold text-slate-900">{name}</h2>
        <p className="mt-1 text-xl text-slate-400">{fonction}</p>
      </div>
      <button
        type="button"
        aria-label={`Message ${name}`}
        className="flex h-14 w-28 items-center justify-center rounded-full border-4 border-cyan-200 text-cyan-400 transition hover:bg-cyan-50"
      >
        <svg
          id="message"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
          className="h-8 w-8"
          aria-hidden="true"
        >
          <circle
            cx="124"
            cy="188.019"
            r="17.5"
            fill="none"
            stroke="#4f46e5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="200"
            cy="188.019"
            r="17.5"
            fill="none"
            stroke="#4f46e5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="276"
            cy="188.019"
            r="17.5"
            fill="none"
            stroke="#4f46e5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M335,288.019h-178.238c-2.425,0-4.768.881-6.592,2.48l-45.899,40.232c-3.235,2.836-8.303.533-8.296-3.769l.05-28.926c.01-5.53-4.47-10.017-10-10.017h-21.026c-8.284,0-15-6.716-15-15V103.019c0-8.284,6.716-15,15-15h270c8.284,0,15,6.716,15,15v170c0,8.284-6.716,15-15,15Z"
            fill="none"
            stroke="#191919"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
        </svg>
      </button>
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 sm:px-10">
      <section className="mx-auto max-w-2xl bg-white px-8 py-10 shadow-xl sm:px-12">
        <Header></Header>
        <div className="divide-y divide-transparent">
          <User
            name="Dale Houston"
            fonction="Software Engineer"
            src="https://i.pravatar.cc/300?img=12"
          />
          <User
            name="Madge Murphy"
            fonction="Product Designer"
            src="https://i.pravatar.cc/300?img=47"
          />
          <User
            name="Margaret Garner"
            fonction="Writer & Journalist"
            src="https://i.pravatar.cc/300?img=32"
          />
          <User
            name="Gertrude Roberts"
            fonction="Fashion Designer"
            src="https://i.pravatar.cc/300?img=44"
          />
          <User
            name="Joshua Olson"
            fonction="Photographer"
            src="https://i.pravatar.cc/300?img=11"
          />
        </div>
      </section>
    </main>
  );
}

export default App;
