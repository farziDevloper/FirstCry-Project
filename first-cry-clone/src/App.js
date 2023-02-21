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
import { useState } from "react";
import { Profile } from "./Components/Profile/Profile";
// import { Profile } from "./Components/Profile/Profile";
import Navigation from "../src/Components/Navigation/index";
import IconMobile from "../src/assets/images/IconMobile";
import MaterialInput from "../src/Components/common/UI/MaterialInput/index.js";
function App() {
  const [user, setLoginUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="App">
      <aside>
        <Navigation />
      </aside>
      <div>
        <MaterialInput
          icon={<IconMobile />}
          name="address2"
          type="text"
          placeholder="Address 2"
        />
      </div>
      {/* <NavBar />
      <Head />

      <Routes>
        <Route path="/" element={<HomePage setLoginUser={setLoginUser} />} />
        <Route path={"/products"} element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductSchema />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/checkout"} element={<CheckOut />} />
        <Route path={"/success"} element={<Sucs />} />
        <Route
          path={"/login"}
          element={<Login setLoginUser={setLoginUser} />}
        />
        <Route path={"/signup"} element={<SignUp />} />
      </Routes>
      <Footer />
      <Profile setLoginUser={user} /> */}
    </div>
  );
}

export default App;
