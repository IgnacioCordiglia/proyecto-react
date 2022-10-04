import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ClickCounter from './components/ClickCounter/ClickCounter'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      
      <body>
        <div className="divider">
          <Routes>
            <Route path="/" element= {<ItemListContainer title="Más vendidos"/>} />
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            
          </Routes>
          
        </div>
      </body>
      
      <footer>
        <Footer />
      </footer>
    </div>
    </BrowserRouter>
  );
}



export default App;
