# Express Session Affinity
[![NPM version](https://img.shields.io/npm/v/express-session-affinity.svg)](https://www.npmjs.com/package/express-session-affinity)
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