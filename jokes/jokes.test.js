const request = require('supertest');
const server = require('../api/server.js');

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRhem1lbiIsImlhdCI6MTU4MjkwOTE3NSwiZXhwIjoxNTgyOTE2Mzc1fQ.Wi_0JYuVDV9rq2BqyBKPJ_uklzbBFwRIEnIL62VEWTs'

describe('jokes router', function(){
    it('should return a 400', function(){
        return request(server)
            .get('/api/jokes')
            .then(res => {
                expect(res.status).toBe(400)
            })
    })
    it('should return an array if provided a token', function(){
        return request(server)
            .get('/api/jokes')
            .set('Authorization', `Bearer ${token}`)
            .then(res => {
                expect(res.status).toBe(401)
            })
    })
})