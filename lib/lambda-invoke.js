'use strict';

const Lambda = require('@medial/lambda');


exports.get = async function(event, context) {
  try {
    return await Lambda.invoke({
      FunctionName: 'medial-example-dev-get',
      Payload: JSON.stringify({
        queryStringParameters: {error: true}
      })
    });
  } catch (err) {
    console.log('err', err);
  }
};