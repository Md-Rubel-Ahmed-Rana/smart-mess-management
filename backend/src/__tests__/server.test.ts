import request from 'supertest';
import app from '../app';

describe('Health Check - Root API', () => {
  it('should return 200 and proper response', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      statusCode: 200,
      success: true,
      message: 'Smart Mess Management application is up and running',
      data: null,
    });
  });
});
