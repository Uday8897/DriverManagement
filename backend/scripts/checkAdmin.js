const User = require("../models/User");

const checkAdmin = async (email) => {
    try {
        const user = await User.findOne({ "email": email }).exec();

        if (!user) {
            return false; // User not found
        }

        console.log(user); // This will log the user document
        console.log(user.role); // This will log the role of the user

        if(user.role === "admin"){
            return true;
        }
        else{
            return false;
        }
    } catch (error) {
        console.error("Error in checkAdmin:", error);
        return false; // Handle any potential errors here
    }
};

module.exports = checkAdmin;
