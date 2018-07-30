# Express Session Affinity
[![NPM Version](https://img.shields.io/npm/v/express-session-affinity.svg?style=flat-square)](https://www.npmjs.com/package/express-session-affinity)
[![Build Status via TravisCI](https://img.shields.io/travis/e-compton/express-session-affinity.svg?style=flat-square)](https://travis-ci.org/e-compton/express-session-affinity)
[![Coverage Status](	https://img.shields.io/coveralls/github/e-compton/express-session-affinity.svg?style=flat-square)](https://coveralls.io/github/e-compton/express-session-affinity?branch=master)

A very simple express middleware for session affinity with scaled cloud foundry applications. Sets the `JSESSIONID` cookie so that each user will consistantly connect to the same cloud foundry node.

See https://docs.cloudfoundry.org/concepts/http-routing.html#sessions

```
npm i --save express-session-affinity
```

## Usage

Add as a middleware to the top level of your express application.
```
const express = require('express');
const expressSessionAffinity = require('express-session-affinity');

app = express();

app.use(expressSessionAffinity);
```
