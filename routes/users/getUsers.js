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

const getUsersWorker = (req, reply) => {
  reply.send(mockdata);
};

// Options for get all items
const getUsers = {
  schema: {
    response: {
      200: {
        type: 'array',
        users: User,
      },
    },
  },
  handler: getUsersWorker,
};

module.exports = getUsers;
