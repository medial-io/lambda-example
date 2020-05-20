'use strict';

const Lambda = require('@medial/lambda');
const Example = require('./lib/routes/example');
const LambdaInvoke = require('./lib/lambda-invoke');

exports.getExample = Lambda.define(Example.get);
exports.postExample = Lambda.define(Example.post);
exports.invoke = LambdaInvoke.get;

