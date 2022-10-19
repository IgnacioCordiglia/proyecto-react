import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ClickCounter from './components/itemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {

  return (
    <BrowserRouter> 
        <Navbar />
          <Routes>
            <Route path="/" element= {<ItemListContainer title="Más vendidos"/>} />
            <Route path="/category/:categoryId" element = {<ItemListContainer show="category"/>} />
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="/team/:team" element={<ItemListContainer show="team"/>} />
          </Routes>
        <Footer />
    </BrowserRouter>
  );
}



export default App;
