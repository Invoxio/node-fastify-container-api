import { v4 as uuidv4 } from 'uuid';
// import items from '../items.js';
import mockdata from '../mockdata.js';

const getUsers = (req, reply) => {
  reply.send(mockdata);
};

const getUser = (req, reply) => {
  const { id } = req.params;
  const user = mockdata.find((user) => user.id === parseInt(id));
  reply.send(user);
};

const addUser = (req, reply) => {
  const { first_name, last_name, email, gender, ip_address } = req.body;
  const user = {
    id: uuidv4(),
    first_name,
    last_name,
    email,
    gender,
    ip_address,
  };
  console.log(user);
  // mockdata = [...mockdata, user];
  reply.code(201).send(user);
};

const deleteUser = (req, reply) => {
  const { id } = req.params;
  mockdata = mockdata.filter((user) => user.id !== parseInt(id));
  reply.send({ message: `User ${id} has been removed` });
};

const updateUser = (req, reply) => {
  const { id } = req.params;
  const { name } = req.body;
  mockdata = mockdata.map((item) =>
    item.id === parseInt(id) ? { id, name } : item,
  );
  item = mockdata.find((item) => item.id === parseInt(id));

  reply.send(item);
};

export { getUsers, getUser, addUser, deleteUser, updateUser };
