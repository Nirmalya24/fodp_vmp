import express from 'express';
import {createUser, siginUser} from '../controllers/usersController';

const router = express.Router();

//users routes
router.post('/okay', (req, res)=> {
  res.send("Oka");
})
router.post('/auth/signup', createUser);
router.post('/auth/signin', siginUser);

export default router;