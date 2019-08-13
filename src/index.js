const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri =
  'mongodb+srv://admin:Testing12345@cluster0-1zo60.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', err => {
  console.log('Error connecting to mongo instance', err);
});

app.get('/', (req, res) => {
  res.send('hi there');
});

app.listen(4555, () => console.log('Listening on port 4555'));
