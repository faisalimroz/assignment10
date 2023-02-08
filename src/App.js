
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Checkout from './Pages/Home/Checkout/Checkout';
import Admin from './Pages/Home/Admin/Admin';
import RequireAuth from './Pages/Home/RequireAuth/RequireAuth';
import Order from './Pages/Order/Order';
import NotFound from './Pages/NotFound/NotFound';

// import Products from './Pages/Home/Products'
// import Product from './Pages/Home/Products/Product'

function App() {
  return (
  
   <Routes>
     {/* <Route path='/' element={}></Route> */}
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path='/footer' element={<Footer></Footer>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/register' element={<Register></Register>}></Route>
     <Route path='/admin' element={<RequireAuth>
      <Admin></Admin>
     </RequireAuth>}></Route>
     <Route path='/order' element={<RequireAuth>
       <Order></Order>
     </RequireAuth>}></Route>
    
     <Route path='/checkout/:pdname/:pdprice/:pdid' element={<RequireAuth>
      <Checkout></Checkout>
     </RequireAuth>}></Route>
   
     {/* <Route path='/products' element={<Products></Products>}></Route>
     <Route path='/product' element={<Product></Product>}></Route> */}
      <Route path='*' element={<NotFound></NotFound>}></Route>
    
   </Routes>
  );
}

export default App;
