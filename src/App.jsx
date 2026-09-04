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
        <span className="text-2xl" aria-hidden="true">
          ▰
        </span>
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
