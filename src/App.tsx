/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections';
import DesignLogic from './pages/DesignLogic';
import CustomOrders from './pages/CustomOrders';
import Lookbook from './pages/Lookbook';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/design-logic" element={<DesignLogic />} />
          <Route path="/custom-orders" element={<CustomOrders />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
