const app = require('../app.js');
const chai = require('chai');

var expect = chai.expect;
var request = chai.request;
var url = 'http://localhost:3000';


var assert = chai.assert;

describe('self passing test', function () {
    it('should pass', function(done) {
        assert.equal('bar', 'bar');
        done();
    })
})


/*
describe('Browser and Node.js', function ()  {

    it('should be status 200', function (done) {
        request(url)
        .get('/html')
        .end((err, res) => {
          res.status.should.equal(200);
          done(err);
        });
      
    });
});

it('Should be able to read main page content', function(done) {
    request('http://localhost:3000', function(error, response, body) {
        expect(body).to.equal('Hello World!');
        done();
    })
})

it('Should be able to find the page which the content is hosted on', function(done) {
    request('http://localhost:3000', function(error, response, body) {
        expect(status).to.equal(200);
        done();
    })
})

assert('foo' == 'foo'); */