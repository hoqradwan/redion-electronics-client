import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Blogs from "./Pages/Blogs/Blogs";
import About from "./Pages/About/About";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import AddItems from "./Pages/AddItems/AddItems";
import ManageItems from "./Pages/ManageItems/ManageItems";
import MyItems from "./Pages/MyItems/MyItems";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Checkout from "./Pages/Checkout/Checkout";
import RequireAuth from "./Pages/Auth/RequireAuth/RequireAuth";
import Footer from "./Pages/Shared/Footer/Footer";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/products/:productId"
          element={
            <RequireAuth>
              <ProductDetail></ProductDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/checkout/:productId"
          element={<Checkout></Checkout>}
        ></Route>
        <Route
          path="/add"
          element={
            <RequireAuth>
              <AddItems></AddItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
