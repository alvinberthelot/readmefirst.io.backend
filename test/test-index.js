'use strict';

var chai = require('chai');
 // we are using the "expect" style of Chai
var expect = chai.expect;
var superagent = require('superagent');

var app = require("../src/server");

var server = app.listen(0);
var port = server.address().port;

describe('Basic routes', function() {

  it('GET / : Hello world!', function(done) {
    superagent.get('http://localhost:' + port + '/')
    .end(function(e, res) {
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('Hello World!');
      done();
    });
  });

});
