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

const updateUserWorker = (req, reply) => {
  const { id } = req.params;
  const { first_name, last_name, email, gender, ip_address } = req.body;
  const newdata = mockdata.map((user) =>
    user.id === parseInt(id)
      ? {
          id: parseInt(id),
          first_name,
          last_name,
          email,
          gender,
          ip_address,
        }
      : user,
  );
  user = newdata.find((user) => user.id === parseInt(id));
  reply.code(201).send(user);
};

// Options for get all items
const updateUser = {
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
  handler: updateUserWorker,
};

module.exports = updateUser;
