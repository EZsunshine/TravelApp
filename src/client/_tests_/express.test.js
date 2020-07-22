const request = require('supertest');
import '@babel/polyfill';
const app = require('../../server/index.js') 


describe('Test root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/all');
        expect(response.statusCode).toBe(200);
    });
});

describe('Text path "/add"', () => {
    test('It should response the POST method', async () => {
        const response = await request(app).post('/add');
        expect(response.statusCode).toBe(200);
    });
});