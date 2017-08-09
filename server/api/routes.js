import express, { Router } from 'express';
import { userIndex, register, login } from './controllers/users';
import { createQuery, apiCall } from './utils/suggestRecipe';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import User from './models/user';
import http from 'http';

const router = Router();
const secret = '7x0jhxt&quot;9(thpX6';
const app_id = "744f7b77";
const app_key = "28d95b6af2869f1fdd36dcc5a7e6a24b";
// delete unless needed

router.get('/protected', (req, res, next) => {
  passport.authenticate('jwt', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    if (user) {
      return res
        .status(200)
        .json({ secret: '123' });
    }
  })(req, res, next);
});

router.route('/login').post((req, res, next) => login(req, res, next));

router.route('/register').post((req, res) => register(req, res));

router.get('/recipes', (req, res, next) => {
  // passport.authenticate('jwt', (err, user, info) => {
  //   if (err) {
  //     return next(err);
  //   }
  //   if (!user) {
  //     return res.status(401).json({ error: 'Invalid credentials' });
  //   }
  //   if (user) {
      let recipes = apiCall(createQuery()).then();
      console.log("hi");
      console.log(recipes);
      return res
        .status(200)
        .json({recipes});
    // }
  // })(req, res, next);
});

router.get('/recipestest', (req, res, next) => {
  let query = createQuery();
  http.get(`http://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`, (response) => {
    response.setEncoding('utf8');
    let rawData = '';
    response.on('data', (chunk) => { rawData += chunk; });
    response.on('end', () => {
        const parsedData = JSON.parse(rawData);
        let recipeinfo = parsedData.hits;
        console.log(parsedData.hits);
        res.status(200).json(recipeinfo);
    });
  });
});

// router.route('/users.json').get(userIndex);

router.route('/').get((req, res) =>
  res.send('Hello Errbody!')
);

export default router;
