const app = require('./app');
const { PORT } = require('./config');

app.listen(PORT || 9000, ()=> {
  console.info('Server Listening on port: ' + PORT);
});