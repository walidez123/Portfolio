import mongoose from 'mongoose';

const websiteSettingSchema = new mongoose.Schema({
  title: { type: String, default: 'My Portfolio' },
  description: { type: String, default: 'A developer portfolio website' },
  logo: { type: String, default: '' },
  picture: { type: String, default: '' },
  bio: { type: String, default: '' },
  address: { type: String, default: '' },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
  frontendSkills: { type: [String], default: ['React', 'Tailwind CSS', 'Next.js'] },
  backendSkills: { type: [String], default: ['Node.js', 'MongoDB', 'Express'] },
  tools: { type: [String], default: ['Git', 'VS Code', 'Docker'] },
  programmingSkills: { type: [String], default: ['JavaScript', 'TypeScript', 'Python'] },
  other: { type: [String], default: ['AWS', 'CI/CD'] },
}, { timestamps: true });

const WebsiteSetting = mongoose.model('WebsiteSetting', websiteSettingSchema);
export default WebsiteSetting;
