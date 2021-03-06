const connection = require('./connection');
const Joi = require('joi');

const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

function isValid(userData) {
  return userSchema.validate(userData);
}

function formatUser({id, first_name: firstName, last_name: lastName, email}) {
  return {
    id,
    firstName,
    lastName,
    email
  };
}

function create({ firstName, lastName, email, password }) {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
  return connection.execute(query, [firstName, lastName, email, password])
  .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
  }

  const findAll = async() => {
    const [users] = await connection.execute('SELECT * from users;');
    return users.map(formatUser);
  }
  
  function findById(id) {
    return connection.execute('SELECT * FROM users WHERE id = ?', [id])
      .then(([results]) => {
      if (results[0]) return formatUser(results[0]);
      return null;
      });
  };

  async function updateUser(id, { firstName, lastName, email, password }) {
    const query = ` UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ? `;

    await connection.execute(query, [firstName, lastName, email, password, id])
    return findById(id);
  }

  module.exports = { formatUser, create, findAll, findById, updateUser, isValid };