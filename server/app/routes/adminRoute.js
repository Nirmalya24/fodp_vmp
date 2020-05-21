import express from 'express';
import {createAdmin, updateUserToAdmin, getUsers, getTables, getTable} from '../controllers/adminController';
import verifyAuth from '../middlewares/verifyAuth';

const router = express.Router();

//user routes
router.post('/admin/signup', verifyAuth, createAdmin);
router.post('/user/:id/admin', verifyAuth, updateUserToAdmin);
router.get('/admin/users', verifyAuth, getUsers);
router.get('/admin/table/:tableName', verifyAuth, getTable);
router.get('/admin/tables', verifyAuth, getTables);

export default router;