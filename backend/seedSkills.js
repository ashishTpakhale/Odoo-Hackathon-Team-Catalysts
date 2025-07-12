console.log('__dirname:', __dirname);
console.log('Expected model path:', require('path').resolve(__dirname, 'models/skillModel.js'));
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Skill = require('./models/skillModel.js'); // adjust path

const MONGO_URI = 'mongodb://localhost:27017/SkillSwapDB';

const seedSkills = async () => {
  await mongoose.connect(MONGO_URI);
  console.log('Connected to DB');

  const skills = [
    { name: 'JavaScript' },
    { name: 'Python' },
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'C++' },
  ];

  await Skill.insertMany(skills);
  console.log('Skills seeded!');
  process.exit(0);
};

seedSkills().catch((err) => {
  console.error(err);
  process.exit(1);
});
