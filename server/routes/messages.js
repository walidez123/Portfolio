import express from 'express';
import {
  createMessage,
  getMessages,
  updateMessageStatus
} from '../controllers/messageController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.post('/', createMessage);
router.get('/', protect, admin, getMessages);
router.put('/:id/status', protect, admin, updateMessageStatus);

export default router;