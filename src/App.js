import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">

      <header className="App-header">
        <Navbar />
      </header>
      <body>
      <div className="divider">
          <ItemListContainer title="Más vendidos"/>
      </div>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
      
  );
}



export default App;
