import express from 'express';
import 'babel-polyfill';
import cors from 'cors';
import env from './env';
import cookieSession from 'cookie-session';
import usersRoute from './app/routes/usersRoute';
import adminRoute from './app/routes/adminRoute';

const app = express();

// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());
// Add middleware for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieSession({
  name: "mysession",
  keys: ['vueauthrandomkey'],
  maxAge: 24 * 60 * 60 * 1000
}))

app.get('/', (req, res) => {
  res.send("API2");
})
app.use('/api/v1', usersRoute);
app.use('/api/v1', adminRoute);

app.listen(env.port).on('listening', () => {
  console.log(`${process.env.NODE_ENV} 🚀 are live on ${env.port}`);
  console.log(process.env.TEST_DATABASE_URL_LOCALHOST);
});


export default app;