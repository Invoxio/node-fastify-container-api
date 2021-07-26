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

const getUserWorker = (req, reply) => {
  const { id } = req.params;
  const user = mockdata.find((user) => user.id === parseInt(id));
  reply.send(user);
};

// Options for get all items
const getUser = {
  schema: {
    response: {
      200: User,
    },
  },
  handler: getUserWorker,
};

module.exports = getUser;
