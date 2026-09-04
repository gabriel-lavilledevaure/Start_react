import Header from "./components/Header";
import User from "./components/User";

function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 sm:px-10">
      <section className="mx-auto max-w-2xl bg-white px-8 py-10 shadow-xl sm:px-12">
        <Header></Header>
        <div>
          <User
            name="Dale Houston"
            fonction="Software Engineer"
            src="https://i.pravatar.cc/300?img=12"
          ></User>
          <User
            name="Madge Murphy"
            fonction="Product Designer"
            src="https://i.pravatar.cc/300?img=47"
          ></User>
          <User
            name="Margaret Garner"
            fonction="Writer & Journalist"
            src="https://i.pravatar.cc/300?img=32"
          ></User>
          <User
            name="Gertrude Roberts"
            fonction="Fashion Designer"
            src="https://i.pravatar.cc/300?img=44"
          ></User>
          <User
            name="Joshua Olson"
            fonction="Photographer"
            src="https://i.pravatar.cc/300?img=11"
          ></User>
        </div>
      </section>
    </main>
  );
}

export default App;
