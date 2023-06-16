import logo from './logo.svg';
import './App.scss';
import Products from './Components/Products/Products';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import ProductsDetails from './Components/ProductsDetails/ProductsDetails';
import Header from './Components/Header/Header';
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Products />
          }
        />
        <Route
          path="/productDetail"
          exact
          element={
            <ProductsDetails />
          }
        />
      </Routes>
    </>
  );
}

export default App;
