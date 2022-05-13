import "./App.css";
import { Head } from "./Components/Header/Head";
import { HomePage } from "./Components/HomePage/HomePage";
import { NavBar } from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./Components/Product/ProductsPage";
import { ProductSchema } from "./Components/Product/ProductSchema";
import { Cart } from "./Components/Cart/Cart";
import { CheckOut } from "./Components/CheckOut/CheckOut";
import { Sucs } from "./Components/Sucs/Sucs";
import { Footer } from "./Components/Footer/Footer";
import { Login } from "./Components/Login/Login";
import { SignUp } from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Head />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path={"/products"} element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductSchema />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/checkout"} element={<CheckOut />} />
        <Route path={"/success"} element={<Sucs />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
