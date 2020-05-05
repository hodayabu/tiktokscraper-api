const chai = require('chai')
var expect = chai.expect;
const request = require('supertest');
const app = require('../../app.js');


describe('GET /hashtag', function() {
    it('OK, getting hashtag metadata json', function(done) {
      this.timeout(8000);
      setTimeout(done, 8000);
      request(app)
        .get('/hashtag/dog/32')
        .end(function(err, res) {
          expect(res.body).to.be.ok;
          expect(res.statusCode).to.be.equal(200);
          done();
        });
    });
  });