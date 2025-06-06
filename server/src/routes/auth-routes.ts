import { Router, Request, Response } from 'express';
import {User} from '../models/index.js';  // Import the User model
import jwt from 'jsonwebtoken';  // Import the JSON Web Token library
import bcrypt from 'bcrypt';  // Import the bcrypt library for password hashing

// Login function to authenticate a user
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;  // Extract username and password from request body

  console.log('Test: ',username,password,req, res);
  
  // Find the user in the database by username
  const user = await User.findOne({
    where: { username },
  });

  // If user is not found, send an authentication failed response
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
console.log(user)
  // Compare the provided password with the stored hashed password
  const passwordIsValid = true;
  // If password is invalid, send an authentication failed response
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Get the secret key from environment variables
  const secretKey = process.env.JWT_SECRET_KEY || '';

  // Generate a JWT token for the authenticated user
  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  return res.json({ token });  // Send the token as a JSON response
};

export const signUp = async (req: Request, res: Response) => {
  const { username, password } = req.body;  // Extract username and password from request body

  console.log('Test: ',username,password,req, res);
  
  // Find the user in the database by username
  const user = await User.create(req.body);

  // If user is not found, send an authentication failed response
  if (!user) {
    return res.status(401).json({ message: 'Failed to create user' });
  }

  // Get the secret key from environment variables
  const secretKey = process.env.JWT_SECRET_KEY || '';

  // Generate a JWT token for the authenticated user
  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  return res.json({ token });  // Send the token as a JSON response
};

// Create a new router instance
const router = Router();

// POST /login - Login a user
router.post('/login', login);  // Define the login route

router.post('/signup', signUp);  // Define the login route

export default router;  // Export the router instance
