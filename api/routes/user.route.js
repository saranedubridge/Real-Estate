import express from 'express';
import { test,UpdateUser,deleteUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router=express.Router();

router.get('/test',test);
router.post('/update/:id', verifyToken,UpdateUser)
router.delete('/delete/:id', verifyToken,deleteUser)


export default router;