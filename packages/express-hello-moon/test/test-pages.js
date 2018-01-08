var expect = require('chai').expect;
var request = require('request');

it('Should be able to read main page content', function(done) {
    request('http://localhost:3000', function(error, response, body) {
        expect(body).to.equal('Hello World!');
        done();
    })
})

it('Should be able to find the page which the content is hosted on', function(done) {
    request('http://localhost:3000', function(error, response, body) {
        response.should.have.status(200);
    })
})