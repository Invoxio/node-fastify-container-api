const { v4: uuidv4 } = require('uuid');
const mockdata = require('./mockdata.js');

const User = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    email: { type: 'string' },
    gender: { type: 'string' },
    ip_address: { type: 'string' },
  },
};

const addUserWorker = (req, reply) => {
  const { first_name, last_name, email, gender, ip_address } = req.body;
  const user = {
    id: uuidv4(),
    first_name,
    last_name,
    email,
    gender,
    ip_address,
  };
  // console.log(user);
  const newdata = [...mockdata, user];
  reply.code(201).send(user);
};

const addUser = {
  schema: {
    body: {
      type: 'object',
      required: ['first_name', 'last_name'],
      properties: {
        id: { type: 'number' },
        first_name: { type: 'string' },
        last_name: { type: 'string' },
        email: { type: 'string' },
        gender: { type: 'string' },
        ip_address: { type: 'string' },
      },
    },
    response: {
      201: User,
    },
  },
  handler: addUserWorker,
};

module.exports = addUser;
