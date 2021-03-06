'use strict';

const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');


exports.get = {
  description: 'Example get',
  tags: ['api'],
  validate: {
    query: Joi.object().keys({
      error: Joi.boolean().default(false).description('Use this to force a error response of 404'),
      a: Joi.array().items(Joi.string()).single()
    })
  },
  handler: async function(request, h) {
    const {a, error} = request.query;

    if (error) {
      throw Boom.notFound('boo boo');
    }

    return h.response({hello: 'world', a})
      .header('my-header', 'value1')
      .header('set-cookie', 'cookieKey=cookieValue')
      .header('set-cookie', 'cookieKey1=cookieValue; HttpOnly', {append: true})
      .code(200);
      
  }
};

exports.post = {
  description: 'Example post',
  tags: ['api'],
  validate: {
    payload: Joi.object().keys({
      a: Joi.number().required().description('This attribute is a really important number'),
      c: Joi.any().description('you can send anything you like')
    })
  },
  handler: async function(request) {
    return request.payload;
  }
};