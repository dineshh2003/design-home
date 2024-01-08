import './App.css';
import Homepage from './pages/Homepage';
import Explore from './pages/Explore';
import About from './pages/About';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/cart" element={<Cart/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
