import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ui/ScrollToTop';

function RedirectServiceToProduct() {
  const { serviceId } = useParams();
  return <Navigate to={`/products/${serviceId}`} replace />;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<RedirectServiceToProduct />} />
          <Route path="/products/:serviceId" element={<ServiceDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
