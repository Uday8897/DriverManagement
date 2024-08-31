import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">

      {/* Service Information Section */}
      <div className="bg-gray-100 rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Service Information</h2>
        <p className="mb-2">
          Welcome to Lucky Temporary Driving Service, your trusted partner for temporary driving needs.
          Whether you need a driver for a day or a week, we've got you covered.
        </p>
        <p className="mb-2">
          Our team of experienced drivers is ready to provide you with safe and reliable transportation 
          whenever you need it. From personal trips to business appointments, we ensure a comfortable and 
          hassle-free journey for our customers.
        </p>
        <p className="mb-2">
          At Lucky Temporary Driving Service, customer satisfaction is our top priority. 
          We strive to deliver exceptional service at competitive rates, making us the preferred choice 
          for temporary driving solutions.
        </p>
        <p>
          Contact us today to book your next ride and experience the convenience of Lucky Temporary Driving Service!
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
