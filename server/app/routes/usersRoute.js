import express from 'express';
import {createUser, siginUser} from '../controllers/usersController';

const router = express.Router();

//users routes
router.get('/home', (req, res)=> {
  res.send("Welcome to Friends of Discovery Park's Vegetation Management Platform");
})
router.post('/auth/signup', createUser);
router.post('/auth/signin', siginUser);

export default router;