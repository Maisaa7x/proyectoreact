import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import './App.css';
import ItemCart from "./components/ItemCart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { initializeApp } from "firebase/app";
import Checkout from "./components/Checkout";
import ItemDetail from "./components/ItemDetail";



function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyA6sdfx5RiukJAkUOta7en16F0iOqa_YfY",
    authDomain: "proyectoreactjscoder.firebaseapp.com",
    projectId: "proyectoreactjscoder",
    storageBucket: "proyectoreactjscoder.appspot.com",
    messagingSenderId: "724538558666",
    appId: "1:724538558666:web:3f9cf342971d85bbc70c33"
  };
  
  initializeApp(firebaseConfig);

  return ( 
  <>
  <CartContext>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/home" element={<ItemListContainer/>} />
    <Route path="/productos" element={<ItemListContainer/>} />
    <Route path="/category/:id" element={<ItemListContainer/>} />
    <Route path="/item/:idi" element={<ItemDetailContainer/>} />
    <Route path="/item/:idi" element={<ItemDetail/>} />
    <Route path="/cart" element={<ItemCart/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
  </Routes>
  </BrowserRouter>
  <Footer/>
  </CartContext>
  </>
  )
}

export default App;
