const Driver = require("../models/Driver");

const addDriver = async (Driver) => {
    try {
      

        const newDriver = new Driver({
            name,
            contact_number,
            availability_status,
            service_area,
            rating,
            shift_timings: {
                start,
                end
            }
        });

    
        const savedDriver = await newDriver.save();

        res.status(201).json(savedDriver);
    } catch (error) {
        console.error("Error adding driver:", error);
        res.status(500).json({ message: "Failed to add driver" });
    }
};

module.exports = addDriver;
