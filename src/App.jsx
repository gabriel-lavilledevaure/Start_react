function User({ src, name, fonction }) {
  return (
    <div className="bg-amber-900">
      <img alt="{name}" src={src}></img>
      <h2>{name}</h2>
      <p>{fonction}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <User name="Hedy Lamarr" fonction="" src="https://i.pravatar.cc/300" />
      <User name="Hedy Lamarr" fonction="" src="https://i.pravatar.cc/300" />
      <User name="Hedy Lamarr" fonction="" src="https://i.pravatar.cc/300" />
    </>
  );
}

export default App;
