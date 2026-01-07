import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './page/Home';
import Product from './page/Product';
import Portfolio from './page/Portfolio';
import Services from './page/Services';
import Clients from './page/Clients';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
