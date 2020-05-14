import express from 'express';
import 'babel-polyfill';
import cors from 'cors';
import env from './env';
import usersRoute from './app/routes/usersRoute';
import adminRoute from './app/routes/adminRoute';

const app = express();

// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());
// Add middleware for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send("API2");
})
app.use('/api/v1', usersRoute);
app.use('/api/v1', adminRoute);

app.listen(env.port).on('listening', () => {
  console.log(`🚀 are live on ${env.port}`);
  console.log(process.env.NODE_ENV);
});


export default app;