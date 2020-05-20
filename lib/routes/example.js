'use strict';

const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');


exports.get = {
  description: 'Example get',
  tags: ['api'],
  validate: {
    query: Joi.object().keys({
      error: Joi.boolean().default(false).description('Use this to force a error response of 404')
    })
  },
  handler: async function(request, h) {
    const isError = request.query.error;

    if (isError) {
      throw Boom.notFound('boo boo');
    }

    return h.response({hello: 'world'}).code(200);
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