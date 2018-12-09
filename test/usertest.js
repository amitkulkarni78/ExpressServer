const request = require("supertest");
const assert = require('assert');
const app = require("../app");

describe("GET /" ,()=>{
    it('should retrun a welcome message', (done) => {
        
        request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type','application/json; charset=utf-8')
        .expect((res)=>{
            assert.equal(res.body['message'],'welcome route')
        })
        .end(done)
    });
})



describe("GET /api/user",()=>{
    it('should retrun an array of users with correct status , message ...', (done) => {
           
        request(app)
        .get('/api/user')
        .expect('Content-Type','application/json; charset=utf-8')
        .expect(200)
        .expect((res)=>{
            
            assert.ok(res.body['data'].length > 1)
            assert.equal(res.body['message'] , 'got all users',"message must be correct")
            assert.equal(res.body['status'] , true, "status must be true")
        })
        .end(done)
    });

    it('should return an array of users with correct format..' , (done)=>{
        request(app)
        .get('/api/user')
        .expect('Content-Type','application/json; charset=utf-8')
        .expect(200)
        .expect((res)=>{
            assert.equal(res.body['data'][0].hasOwnProperty('ID'),true,"has property ID")
            assert.equal(res.body['data'][0].hasOwnProperty('FIRST_NAME'),true,"has property FIRST_NAME")
            assert.equal(res.body['data'][0].hasOwnProperty('LAST_NAME'),true,"has property LAST_NAME")
            assert.equal(res.body['data'][0].hasOwnProperty('EMAIL'),true,"has property EMAIL")
            assert.equal(res.body['data'][0].hasOwnProperty('PASSWORD') ,true, "has property PASSWORD")
        })
        .end(done)
    })



    
})


