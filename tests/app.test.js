import { describe, expect, test } from '@jest/globals';
import request from 'supertest';
import { app } from '../server/index.js';

describe('Portfolio API Tests', () => {
  test('GET / should return 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  test('GET /projects should return 200', async () => {
    const response = await request(app).get('/projects');
    expect(response.status).toBe(200);
  });

  test('GET /about should return 200', async () => {
    const response = await request(app).get('/about');
    expect(response.status).toBe(200);
  });

  test('GET /contact should return 200', async () => {
    const response = await request(app).get('/contact');
    expect(response.status).toBe(200);
  });

  test('POST /contact should handle form submission', async () => {
    const response = await request(app)
      .post('/api/contact')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message'
      });
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });
});