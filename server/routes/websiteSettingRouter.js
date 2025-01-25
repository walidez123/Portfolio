import express from 'express';
import { getSettings, updateSettings } from '../controllers/websiteSettingController.js';

const router = express.Router();

// Route to get website settings
router.get('/', getSettings);

// Route to update website settings
router.put('/', updateSettings);

export default router;
