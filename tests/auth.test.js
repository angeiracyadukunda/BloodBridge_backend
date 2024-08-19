const request = require('supertest');
const app = require('../server');

describe('Auth API', () => {
  it('should register a user', async () => {
    const res = await request(app).post('/api/auth/register').send({
      names: 'John Doe',
      bloodType: 'O+',
      province: 'Kigali',
      district: 'Kicukiro',
      sector: 'Nyarugenge',
      cell: 'Gikondo',
      id: '123456789',
      phoneNumber: '0781234567',
      preferredLanguage: 'Kinyarwanda',
      KGL: 'Kigali',
      age: 25,
      password: 'password123'
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toBe('User registered successfully');
  });

  // Add more tests
});
