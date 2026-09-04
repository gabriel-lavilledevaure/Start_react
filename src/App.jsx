const name = "Hedy Lamarr";
const age = 30;
const monStyle = { backgroundColor: "lightgray", padding: "20px" };

function App() {
  const hello = (nom) => {
    return nom;
  };
  return (
    <>
      <h1 className="card__title">{name}'s Todos</h1>
      <img className="card__img" src="https://i.imgur.com/yXOvdOSs.jpg"></img>
      <ul style={monStyle}>
        <li>Invent new traffic lights {age + 1}</li>
        <li className="list__item">Rehearse a movie scene {hello("Bill")}</li>
        <li className="list__item">Improve the spectrum technology</li>
      </ul>
    </>
  );
}

export default App;
