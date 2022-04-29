import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Login from './Pages/Auth/Login/Login'
import Register from './Pages/Auth/Register/Register';


function App() {
  return (
    <div>
      <Header></Header>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path='/blogs' element={<Blogs></Blogs>}></Route>
     <Route path='/about' element={<About></About>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/signup' element={<Register></Register>}></Route>
   </Routes>
    </div>
  );
}

export default App;
