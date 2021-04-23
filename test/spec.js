const { expect } = require('chai')
// const axios = require('axios')

const app = require('supertest')(require('../app'))

describe('test spec', function() {
  it('1 equals 1', function() {
    expect(1).to.equal(1);
  });
});

describe('Routes', function() {
  describe('GET /', function() {
    it('shows some info', async function() {
      const response = await app.get('/');
      expect(response.text).to.include('Acme Movie API');
    });
  });
});