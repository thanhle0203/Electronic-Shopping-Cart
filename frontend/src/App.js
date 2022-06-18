
import './App.css';
import {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

// Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <BrowserRouter>
      < Navbar />
      < SideDrawer show={sideToggle}/>
      < Backdrop show={sideToggle}/>

      <Routes>
        <Route path="/" element={<HomeScreen />}/>
        <Route path="/product/:id" element={<ProductScreen />}/>
        <Route path="/cart" element={<CartScreen />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
