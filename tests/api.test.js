// tests/api.test.js
const request = require('supertest');
const app = require('../src/app'); // We'll need to export 'app' from a new 'app.js' file
// Note: server.js currently starts the server directly.
// It's better practice to separate app creation from server listening for testability.
// This subtask will need to refactor server.js and create app.js.

describe('API Health Check', () => {
  it('GET /api/v1/health should return 200 OK and status UP', async () => {
    const response = await request(app).get('/api/v1/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('UP');
    expect(response.body).toHaveProperty('timestamp');
  });
});
