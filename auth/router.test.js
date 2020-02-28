const request = require('supertest');
const server = require('../api/server.js');

describe('auth-router', function(){
    describe('register /POST', function(){
        it('should return 201 create', function(){
            return request(server)
                 .post('/api/auth/register')
                 .send({
                     username: 'testing6',
                     password: 'tests'
                 })
                 .then(res => {
                     expect(res.status).toBe(201)
                 })
         })
        it('should return JSON formatted body', function(){
            return request(server)
                .post('/api/auth/register')
                .send({
                    username: 'testing1',
                    password: 'test'
                })
                .then(res => {
                    expect(res.type).toBe('application/json');
                })
        })
        it('should return not return XML formatted body', function(){
            return request(server)
                .post('/api/auth/register')
                .send({
                    username: 'testing1',
                    password: 'test'
                })
                .then(res => {
                    expect(res.type).not.toBe(/xml/);
                })
        })
    })

    describe('login /POST', function(){
        it('should return a token', function(){
            return request(server)
                .post('/api/auth/login')
                .send({
                    username: 'testing1',
                    password: 'test'
                })
                .then(res => {
                    expect(res.body.token).toBeDefined()
                })
        })
        it('should return status code 400', function(){
                return request(server)
                .post('/api/auth/login')
                .send({
                    username: 'testing',
                    password: 'tset'
                })
                .then(res => {
                    expect(res.status).toBe(400)
                })
        })
        it('should return status code 400', function(){
            return request(server)
            .post('/api/auth/login')
            .send({
                username: 'testing',
            })
            .then(res => {
                expect(res.status).toBe(400)
            })
    })
    })
})