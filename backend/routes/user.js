const express = require("express");
const cors = require("cors");
const userController = require("../controllers/user");
const authMiddleware = require("../utils/authMiddleware");

const router = express.Router();

// Use CORS middleware
router.use(cors());

// Define routes with authentication middleware
router.get("/users",userController.getUsers);

module.exports = router;
