import express from 'express';
import users from "../controllers/users/users";

export const router = express.Router();

/* GET users listing. */
router.get("/", users.getUsers);

