import express from 'express';
import {createAdmin, updateUserToAdmin, getUsers} from '../controllers/adminController';
import verifyAuth from '../middlewares/verifyAuth';

const router = express.Router();

//user routes
router.post('/admin/signup', verifyAuth, createAdmin);
router.get('/admin/users', verifyAuth, getUsers);
router.post('/user/:id/admin', verifyAuth, updateUserToAdmin);

export default router;