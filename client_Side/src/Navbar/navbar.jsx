import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../style/navbar.css'

export const Navbar = ({ search, setSearch }) => {
  const [loged, setLoged] = useState(false)
  const [email ,setemail] =useState('')
  const [MyDart , setCart ] = useState([])



  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('email')
    const CartData = localStorage.getItem('Cart')


    if (CartData) {
      try {
        setCart(JSON.parse(CartData))
      } catch (error) {
        console.error('Error parsing cart data:', error)
        setCart([]); 
      }
    } else {
      setCart([]); 
    }


    setemail(user)
    if (token) {
      setLoged(true)
    } else {
      setLoged(false)
    }
  }, []);

  console.log(email)


  function handleLogout() {
    localStorage.clear();

    setLoged(false); 
    alert('LogOut Successful');
    window.location.reload();
  }

  return (
    <>
     <nav>

        <img src="https://tse4.mm.bing.net/th?id=OIP.EvySptrtiHdBbHBxqauQsgHaFj&pid=Api&P=0&h=180" />
<div>

        
   
      <Link to="/" >Home</Link>
     
      <Link to="/Cart">🛒</Link>
      {/* <Link to="/favorites" >❤️</Link> */}

      <div className={loged ? 'profile' : ''}>
       {/* <p  className='email_user'> <ul>{}</ul></p> */}
      {loged ? (
        <>
          <Link to="/" onClick={handleLogout} className='Login'>
            Log Out
          </Link>
        </>
      ) : (
        <Link to="/login" className='Login'>Login</Link>
      )}
</div>
</div>
     
      </nav>
    </>
  );
};
