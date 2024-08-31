import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  return (
    <div>
      <nav className="bg-black flex flex-row items-center justify-between h-[100px] w-full">
        <div>
          <h1 className="text-white text-4xl ml-2">LUCKY TEMPORARY DRIVER SERVICE</h1>
        </div>
        <div className='flex flex-row space-x-20 mr-28'>
          {(token) ? (
            <>
              <h2 className="text-white text-2xl cursor-pointer"><Link to="/faredetails">Fare Details</Link></h2>
              <h2 className="text-white text-2xl cursor-pointer"><Link to="/driverdetails">Driver Details</Link></h2>
              {(isAdmin === "true") ?( 
                <h2 className="text-white text-2xl cursor-pointer"><Link to="/adddriver">Add Driver</Link></h2>
              ):(
                <>
              <h2 className="text-white text-2xl cursor-pointer"><Link to="/bookdriver">Book Service</Link></h2>
              <h2 className="text-white text-2xl cursor-pointer"><Link to="/dashboard">Dashboard</Link></h2>
              </>)
              }
              <h2 className="text-white text-2xl cursor-pointer" onClick={handleLogout}>Log Out</h2>
            </>
          ) : (
            <>
              <h2 className="text-white text-2xl"><Link to="/login">Log In</Link></h2>
              <h2 className="text-white text-2xl"><Link to="/register">Sign Up</Link></h2>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
