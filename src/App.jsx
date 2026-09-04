import Header from "./components/Header";
import User from "./components/User";
import data from "./data/data";

function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 sm:px-10">
      <section className="mx-auto max-w-2xl bg-white px-8 py-10 shadow-xl sm:px-12">
        <Header></Header>
        <div>
          {data.map((user) => (
            <User src={user.src} name={user.name} fonction={user.fonction} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
