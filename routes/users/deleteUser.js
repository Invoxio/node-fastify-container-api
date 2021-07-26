const mockdata = require('./mockdata.js');

const deleteUserWorker = (req, reply) => {
  const { id } = req.params;

  const newData = mockdata.filter((user) => user.id !== parseInt(id));
  reply.send({ message: `User ${id} has been removed` });
};

// Options for get all items
const deleteUser = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: deleteUserWorker,
};

module.exports = deleteUser;
