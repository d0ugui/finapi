const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.json());

app.use(router);
// // Middleware
// function verifyIfExistsAccountCPF(request, response, next) {
//   const { cpf } = request.headers;
//   const customer = customers.find((client) => client.cpf === cpf);

//   if (!customer) {
//     return response.status(400).json({ error: 'Customer not found' });
//   }

//   request.customer = customer;

//   return next();
// }

// function getBalance(statement) {
//   const balance = statement.reduce((acc, operation) => {
//     if (operation.type === 'credit') {
//       return acc + operation.amount;
//     }
//     return acc - operation.amount;
//   }, 0);

//   return balance;
// }

// app.post('/account', (request, response) => {
//   const { cpf, name } = request.body;

//   const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf);

//   if (customerAlreadyExists) {
//     return response.status(400).json({ error: 'Customer already exists!' });
//   }

//   customers.push({
//     cpf,
//     name,
//     id: uuidv4(),
//     statement: [],
//   });

//   return response.status(201).json({ cpf, name });
// });

// app.get('/statement', verifyIfExistsAccountCPF, (request, response) => {
//   const { customer } = request;
//   return response.json(customer.statement);
// });

// app.post('/deposit', verifyIfExistsAccountCPF, (request, response) => {
//   const { description, amount } = request.body;
//   const { customer } = request;

//   const statementOperation = {
//     description,
//     amount,
//     created_at: new Date(),
//     type: 'credit',
//   };

//   customer.statement.push(statementOperation);

//   return response.status(201).send();
// });

// app.post('/withdraw', verifyIfExistsAccountCPF, (request, response) => {
//   const { amount } = request.body;
//   const { customer } = request;

//   const balance = getBalance(customer.statement);

//   if (balance < amount) {
//     return response.status(400).json({ error: 'Insufficient founds!' });
//   }

//   const statementOperation = {
//     amount,
//     created_at: new Date(),
//     type: 'debit',
//   };

//   customer.statement.push(statementOperation);
//   return response.status(201).send();
// });

// app.get('/statement/date', verifyIfExistsAccountCPF, (request, response) => {
//   const { customer } = request;
//   const { date } = request.query;

//   const dateFormat = new Date(`${date} 00:00`);

//   const statement = customer.statement.filter(
//     (state) => state.created_at.toDateString()
//       === new Date(dateFormat).toDateString(),
//   );

//   return response.json(statement);
// });

// app.put('/account', verifyIfExistsAccountCPF, (request, response) => {
//   const { name } = request.body;
//   const { customer } = request;

//   customer.name = name;

//   return response.status(201).send();
// });

// app.get('/account', verifyIfExistsAccountCPF, (request, response) => {
//   const { customer } = request;
//   return response.json(customer);
// });

// app.delete('/account', verifyIfExistsAccountCPF, (request, response) => {
//   const { customer } = request;

//   customers.splice(customer, 1);

//   return response.status(200).json(customers);
// });

// app.get('/balance', verifyIfExistsAccountCPF, (request, response) => {
//   const { customer } = request;
//   const balance = getBalance(customer.statement);

//   return response.json(balance);
// });

app.listen('3333', () => console.log('🔥 Server started at http://localhost:3333'));
