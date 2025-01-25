import WebsiteSetting from '../models/WebsiteSetting.js';

// Fetch settings
export const getSettings = async (req, res) => {
  try {
    const settings = await WebsiteSetting.findOne();
    if (!settings) {
      const defaultSettings = new WebsiteSetting();
      await defaultSettings.save();
      return res.status(200).json(defaultSettings);
    }
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
};

// Update settings
export const updateSettings = async (req, res) => {
  try {
    const updatedSettings = await WebsiteSetting.findOneAndUpdate(
      {}, // No filter as we expect only one settings document
      req.body,
      { new: true, upsert: true }
    );
    res.status(200).json(updatedSettings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update settings' });
  }
};
