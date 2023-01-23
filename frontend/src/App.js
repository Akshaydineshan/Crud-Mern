
import './App.css';
import Header from './components/Header'
import Product from './components/Product'
import Signup from './components/Signup'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Privatecomponent from './components/Privatecomponent';
import UpdateProduct from './components/UpdateProduct';
import AddProduct from './components/AddProduct';
import Signin from './components/Signin';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route element={<Privatecomponent />}>

            <Route path='/' element={<Product />} ></Route>
            <Route path='/addproduct' element={<AddProduct />} ></Route>
            <Route path='/updateproduct/:id' element={<UpdateProduct />} ></Route>
           

          </Route>

          <Route path='/signup' element={<Signup />} ></Route>
          <Route path='/signin' element={<Signin />} ></Route>
         
        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
