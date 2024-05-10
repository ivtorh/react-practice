import "./App.css";
// import Evento from "./components/Evento";
import Form from "./components/Form";
import Frase from "./components/Frase";
import InputControlled from "./components/InputControlled";
// import Pessoa from './components/Pessoa';
// import List from "./components/List";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  // const nome = 'Vitor Hugo';
  // const foto = 'https://via.placeholder.com/150';
  // const idade = '23 anos';
  // const profissao = 'Programador Front-End';

  return (
    <div className="App">
      <h1>Testando React.js</h1>
      <Frase />
      <br></br>
      <Form />
      <br></br>
      {/*<Pessoa 
      nome={nome} 
      foto={foto} 
      idade={idade} 
      profissao={profissao} /> */}
      <br></br>
      <InputControlled /> {/* utilizando o useState */}
      <ToggleTheme /> {/* utilizando o useEffect */}

    </div>
  );
}

export default App;
