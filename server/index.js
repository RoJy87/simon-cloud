const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes');
const fileRouter = require('./routes/file.routes');
const corsMiddleware = require('./middleware/cors.middleware');

const app = express();
const PORT = config.get('PORT');

app.use(corsMiddleware);
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/files', fileRouter);

const start = async () => {
  try {
    mongoose.connect(config.get('dbUrl'));

    app.listen(PORT, () => {
      console.log('Server started on port: ', PORT);
    });
  } catch (err) {}
};
start();
