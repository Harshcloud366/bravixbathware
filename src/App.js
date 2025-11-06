import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import Categories from './Components/Pages/Admin/Categories';
import Series from './Components/Pages/Admin/Series';
import AProducts from './Components/Pages/Admin/AProducts';
import ProductsPage from './Components/ProductsPage';
import TeamMemberDetail from './Components/Pages/TeamMemberDetail';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
<Route path="/team/leadership" element={<TeamMemberDetail />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/categories/:categoryId/series" element={<Series />} />
        <Route path="/admin/series/:seriesId/products" element={<AProducts />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;