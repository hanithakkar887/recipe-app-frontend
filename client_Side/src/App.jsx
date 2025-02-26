// import {BrowserRouter , Routes , Route } from 'react-router-dom'

// import './App.css'
// import { Signup } from './Authentication/Signup'
// import Login from './Authentication/Login'
// import { Navbar } from './Navbar/navbar'
// import { Home } from './Component/Home'
// import { CartPage } from './Component/CartPage'



// function App() {

// function Allcomponent(){
//     return (
//       <>
//        <Navbar/>
        
//         <Routes>
//         <Route path='/' element={ <Home/>} />
//         <Route path='/signup' element={<Signup/>} />
//         <Route path='/login' element={<Login/>} />
//         <Route path='/Cart' element={<CartPage/>} />
      
//         </Routes>
//       </>
//     )
// }


//   return (
//     <>

//     <BrowserRouter>
//     <Allcomponent/> 
//     </BrowserRouter>
//     </>
//   )
// }

// export default App
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Signup } from './Authentication/Signup';
import Login from './Authentication/Login';
import { Navbar } from './Navbar/navbar';
import { Home } from './Component/Home';
import { CartPage } from './Component/CartPage';
// import { Favorites } from './Component/Favorites';
function AllRoutes() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
          {/* <Route path="/favorites" element={<Favorites/>} /> */}
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
