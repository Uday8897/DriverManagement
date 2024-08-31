import React from 'react';

const LuckyDriverService = () => {
  return (
    <div className="bg-black text-white p-6 mt-11 ml-2 mr-2">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">LUCKY TEMPORARY DRIVER SERVICE</h1>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold bg-white text-black p-2 inline-block">City Local Services</h2>
        <ul className="mt-4">
          <li className="text-xl">1. For First 4 Hours - 600/-</li>
          <li className="text-xl">Extra 1 Hour - 100/-</li>
          <li className="text-xl">2. For 8 Hours - 900/- (Lunch or Dinner)</li>
          <li className="text-xl">3. For 12 Hours - 1400/- (Lunch or Dinner)</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold bg-white text-black p-2 inline-block">Outstation Services</h2>
        <ul className="mt-4">
          <li className="text-xl">1. For 150Km 1300/- (Up & Down) (Food & Accommodation)</li>
          <li className="text-xl">2. For 250Km 1500/- (Up & Down) (Food & Accommodation)</li>
          <li className="text-xl">3. For 400Km 1800/- (Up & Down) (Food & Accommodation)</li>
          <li className="text-xl">4. For Only Pickup OR Dropping 1800/- (Return Charges)</li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <div className="text-xl">Mallikarjuna</div>
        <div className="text-xl">91774 74115, 91822 67295</div>
      </div>
    </div>
  );
};

export default LuckyDriverService;
