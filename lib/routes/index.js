'use strict';

const Example = require('./example');


module.exports = [
  {path: '/example', method: 'GET', config: Example.get},
  {path: '/example', method: 'POST', config: Example.post}
];