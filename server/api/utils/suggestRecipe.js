import express, { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import http from 'http';

const router = Router();
const app_id = "744f7b77";
const app_key = "28d95b6af2869f1fdd36dcc5a7e6a24b";
// https://api.edamam.com/search?q=1+chicken%22AND%221+tomato&app_id=744f7b77&app_key=28d95b6af2869f1fdd36dcc5a7e6a24b

// router.get('/recipes', (req, res, next) => {
//   passport.authenticate('jwt', (err, user, info) => {
//     if (err) {
//       return next(err);
//     }
//     if (!user) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }
//     if (user) {
//       return res
//         .status(200)
//         .json({ secret: '123' });
//     }
//   })(req, res, next);
// });
//
// router.get('/test', function(req, res){
//   apiCall(createQuery());
// });

export const createQuery = () => {
  return (
    "chicken"
  );
};

export const apiCall = (query) => {
  return (
    http.get(`http://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`, (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];

      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
                          `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
                          `Expected application/json but received ${contentType}`);
      }
      if (error) {
        console.error(error.message);
        // consume response data to free up memory
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          console.log(parsedData);
        } catch (e) {
          console.error(e.message);
        }
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
    })
  );
};
