import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemList/ItemList';

function App() {
  let misEstilos = { backgroundColor: "lightblue"}
  let titulo = <p id="titulo">Hola uwu</p>

  return (
    <div className="App">
      <header className="App-header">
        {titulo}
      </header>
      <ItemList />
    </div>
  );
}



export default App;
