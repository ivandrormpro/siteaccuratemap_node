import express from 'express';

const app = express();

app.get('/users', () => {
  // eslint-disable-next-line no-console
  console.log('Listagem de usuarios');
});

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port 3333');
});
