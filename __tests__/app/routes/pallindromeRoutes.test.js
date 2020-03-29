import request from 'supertest';
import app from '../../../server';

describe('POST /api/submitEntry ', () => {
	it('It should return http 200 for submit entry api', async () => {
	  const requestBody = {
			"name": "jenny",
			"message": "abba",
		};
		const response = await request(app)
			.post('/api/submitEntry')
			.send(requestBody);
		expect(response.statusCode).toBe(200);
	});
	
	it('It should return score 1 for pallindrome word', async () => {
		const requestBody = {
			"name": "jenny1",
			"message": "abba",
		};
		const response = await request(app)
			.post('/api/submitEntry')
			.send(requestBody);
		let json = response.body;
		expect(json.score).toBe(1);
	});
	
	it('It should return score 0 for non-pallindrome word', async () => {
		const requestBody = {
			"name": "jenny2",
			"message": "abcdba",
		};
		const response = await request(app)
			.post('/api/submitEntry')
			.send(requestBody);
		let json = response.body;
		expect(json.score).toBe(0);
	});
});


describe('GET /api/getScores ', () => {
	it('It should respond with status code 200 for get score api', async() => {
		const response = await request(app).get('/api/getScores');
		expect(response.statusCode).toBe(200);
	});
});

