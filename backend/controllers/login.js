const authService = require('../services/login');
const bcrypt = require("bcryptjs");
const checkAdmin=require("../scripts/checkAdmin")

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const token = await authService.login(email, password); 
        const isAdmin = await checkAdmin(email); 
        res.json({ token, isAdmin });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

module.exports = { login };
