const Driver = require("../models/Driver");
const User = require("../models/User");

const bookDriver = async (userId, driverId) => {
  try {
    const driver = await Driver.findById(driverId);

    if (!driver) {
      return "Driver not found";
    }

    if (!driver.available) {
      return "Driver is not available";
    }

    const user = await User.findById(userId);


    driver.available = false;
    await driver.save();

    user.bookedDriver = driverId;
    await user.save();


    return "Driver booked successfully";
  } catch (error) {
    // Handle any errors that occur during the booking process
    console.error("Error booking driver:", error.message);
    return "An error occurred while booking the driver";
  }
};

module.exports = bookDriver;
