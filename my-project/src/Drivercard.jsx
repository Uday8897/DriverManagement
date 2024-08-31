import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DriverCard = ({ name, mobile, imageUrl, onCardClick }) => {
  return (
    <div className='flex flex-row ml-4 mt-4 space-x-4' onClick={onCardClick}>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
        <div className="bg-gray-200 p-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Driver Details</h2>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-center">
            <img
              className="w-72 h-84 rounded-xl border-2 border-black object-cover"
              src={imageUrl}
              alt="Driver"
            />
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Name: {name}</h3>
            <p className="mt-2 text-xl font-semibold">Mobile No: {mobile}</p>
          </div>
          <div className="mt-6">
            <h4 className="text-lg font-bold">Note:</h4>
            <p className="text-1xl font-bold">
              Dear customer should not call the driver personally, the company should be informed. 
              THANK YOU 🙏
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DriverList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const driverDetails = [
    {
      name: 'Balu',
      mobile: '9182267295',
      imageUrl: '/baluanna.jpg', // Assuming the image is in the public folder
    },
    {
      name: "MalliKarjun",
      mobile: "9121708147",
      imageUrl: "/baluanna2.jpg" // Assuming the image is in the public folder
    }
  ];

  const handleCardClick = () => {
    navigate("/bookdriver");
  };

  return (
    <div className='flex flex-row'>
      {driverDetails.map((driver, index) => (
        <DriverCard
          key={index}
          name={driver.name}
          mobile={driver.mobile}
          imageUrl={driver.imageUrl}
          onCardClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default DriverList;
