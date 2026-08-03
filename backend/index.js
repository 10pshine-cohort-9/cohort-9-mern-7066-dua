const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const logger = require('./src/utils/logger');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// my projets main routess

app.get('/', (req, res) => {
  logger.info('Root endpoint hit!');
  res.json({ message: 'Backend server is running successfully!' });
});

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});