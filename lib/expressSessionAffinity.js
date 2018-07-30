'use strict';

const uuid = require('uuid/v4');

const SESSION_AFFINITY_COOKIE = 'JSESSIONID';

module.exports = function expressSessionAffinity(req, res, next) {
  let cookies = req.cookies || {};

  if (!cookies[SESSION_AFFINITY_COOKIE]) {
    res.cookie(SESSION_AFFINITY_COOKIE, uuid());
  }

  next();
}
