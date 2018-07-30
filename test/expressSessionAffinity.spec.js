'use strict';

const assert = require('assert');
const sinon = require('sinon');

const expressSessionAffinity = require('../lib/expressSessionAffinity');

describe('expressSessionAffinity', () => {
  let res, req;

  beforeEach(() => {
    req = {
      cookies: {
        'JSESSIONID': 'some guid'
      }
    };

    res = {
      cookie: sinon.spy()
    };
  });

  it('cookie is not already set', done => {
    delete req.cookies['JSESSIONID'];

    expressSessionAffinity(req, res, () => {
      assert(res.cookie.calledOnce);
      assert(res.cookie.calledWith('JSESSIONID', sinon.match.string));

      done();
    });
  });

  it('cookie is already set', done => {
    expressSessionAffinity(req, res, () => {
      assert(res.cookie.notCalled);

      done();
    });
  });

  it('no cookies in request', done => {
    delete req.cookies;
    expressSessionAffinity(req, res, () => {
      assert(res.cookie.calledOnce);
      assert(res.cookie.calledWith('JSESSIONID', sinon.match.string));

      done();
    });
  });
});
