const setupTestEnvironment = require('../../tests/setupTests');

const fastify = setupTestEnvironment();

test('should be able to get all users', async () => {
  const getAll = await fastify.inject({
    url: '/users',
    method: 'GET',
  });
  expect(getAll.statusCode).toBe(200);
  expect(getAll.json()[10].id).toBe(11);
  expect(getAll.json()[10].first_name).toBe('Silvan');
  expect(getAll.json()[10].gender).toBe('Female');
});

test('should be able to get a single user', async () => {
  const getUser = await fastify.inject({
    url: '/users/10',
    method: 'GET',
  });
  expect(getUser.statusCode).toBe(200);
  expect(getUser.json().id).toBe(10);
  expect(getUser.json().first_name).toBe('Nedi');
  expect(getUser.json().gender).toBe('Male');
});

test('should be able to get add a user', async () => {
  const newUser = {
    first_name: 'Bob',
    last_name: 'Barker',
    email: 'bob@barker.com',
    gender: 'male',
    ip_address: '192.168.1.1',
  };

  const addNewUser = await fastify.inject({
    url: '/users',
    method: 'POST',
    payload: newUser,
  });
  expect(addNewUser.statusCode).toBe(201);
  expect(addNewUser.json().first_name).toBe(newUser.first_name);
  expect(addNewUser.json().last_name).toBe(newUser.last_name);
});

test('should be able to get update a user', async () => {
  const updateUser = {
    first_name: 'Buggs',
    last_name: 'Bunny',
    email: 'Buggs@Bunnyland.com',
    gender: 'male',
    ip_address: '192.168.1.1',
  };

  const updateNewUser = await fastify.inject({
    url: '/users/10',
    method: 'PUT',
    payload: updateUser,
  });

  expect(updateNewUser.statusCode).toBe(201);
  expect(updateNewUser.json().first_name).toBe(updateUser.first_name);
  expect(updateNewUser.json().last_name).toBe(updateUser.last_name);
});

test('should be able to delete a user', async () => {
  const deleteUser = await fastify.inject({
    url: '/users/11',
    method: 'DELETE',
  });

  expect(deleteUser.statusCode).toBe(200);
  expect(deleteUser.json().status).toBe('ok');
});
