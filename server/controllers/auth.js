import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

import users from '../models/auth.js';

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await users
    } catch (error) {
        res.status(500).json("Something went wrong...")
    }
}
export const login = async (req, res) => {

}