import "./App.css";
import Frase from "./components/Frase";
import InputControlled from "./components/InputControlled";
// import Pessoa from './components/Pessoa';
import ToggleTheme from "./components/ToggleTheme";
import List from "./components/List";

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
      <List />
      {/*<Pessoa 
      nome={nome} 
      foto={foto} 
      idade={idade} 
      profissao={profissao} /> */}
      <br></br>
      <InputControlled></InputControlled> {/* utilizando o useState */}
      <ToggleTheme></ToggleTheme> {/* utilizando o useEffect */}
    </div>
  );
}

export default App;
