import Header from "./components/Header";
import User from "./components/User";
import data from "./data/data";

function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 sm:px-10">
      <section className="mx-auto max-w-2xl bg-white px-8 py-10 shadow-xl sm:px-12">
        <Header></Header>
        <ul className="flex flex-col gap-4">
          {data.map((user) => (
            <li key={user.id}>
              <User
                connected={user.connected}
                src={user.src}
                name={user.name}
                fonction={user.fonction}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
