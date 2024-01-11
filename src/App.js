import './App.css';
import Homepage from './pages/Homepage';
import Explore from './pages/Explore';
import About from './pages/About';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
          <Route exact path="/" element={<Homepage />} />
          {/* <Route exact path="/explore" element={<Explore/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/wishlist" element={<Wishlist/>} />
          <Route exact path="/cart" element={<Cart/>} /> */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
