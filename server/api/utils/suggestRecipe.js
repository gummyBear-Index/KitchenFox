import express, { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import http from 'http';
import Promise from "bluebird";


const router = Router();
const app_id = "744f7b77";
const app_key = "28d95b6af2869f1fdd36dcc5a7e6a24b";
// api call address
// https://api.edamam.com/search?q=1+chicken%22AND%221+tomato&app_id=744f7b77&app_key=28d95b6af2869f1fdd36dcc5a7e6a24b

export const createQuery = (result) => {
    let query = "";
    let units;
    Object.values(result.inventory).map((entry, idx) => {
      if (entry.units === "each") {
        units = "";
      } else{
        units = entry.units;
      }
      // query = query + `${entry.name}+${entry.quantity}${units}AND`;
      query = query + `${entry.name}+`;
    });
  return query.slice(0, -1);
};

export const apiCall = (query) => {
  return new Promise((resolve, reject) => {
    const request = http.get(`http://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&to=${5}`, (res) => {
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
        // consume response data to free up memory
        res.resume();
        return;
      }
      res.setEncoding('utf8');
      let rawData = '';
      let recipeinfo = [];
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          console.log(parsedData);
          parsedData.hits.map((recipe, idx) => {
            recipeinfo.push({
              label: recipe.recipe.label,
              url: recipe.recipe.url,
              image: recipe.recipe.image,
              ingredients : recipe.recipe.ingredients
            });
          });
        // });
        } catch (e) {
          reject(e);
        }
        resolve(recipeinfo);
      });
    });
    request.on('error', function(err) {
      // This is not a "Second reject", just a different sort of failure
      reject(err);
    });
    request.end();
  });
};
