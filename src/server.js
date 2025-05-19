// src/server.js (modified)
const app = require('./app');
const logger = require('./utils/logger'); // Assuming logger is in utils

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
    logger.info(`API available at http://localhost:${PORT}/api/v1`);
    logger.info(`Health check at http://localhost:${PORT}/api/v1/health`);
});
