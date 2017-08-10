import express, { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import http from 'http';
import Promise from "bluebird";


export const upcLookUp = (upc_code) => {
  return new Promise((resolve, reject) => {
    const request = http.get(`https://nutritionix-api.p.mashape.com/v1_1/item?upc=${upc_code}`, (res) => {
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
      let iteminfo = [];
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          console.log(parsedData);
            iteminfo.push({
              item_name: parsedData.item_name,
              quantity: parsedData.nf_serving_size_qty,
              unit: parsedData.nf_serving_size_unit,
              grams : parsedData.nf_serving_weight_grams,
            });
        } catch (e) {
          reject(e);
        }
        resolve(iteminfo);
      });
    });
    request.on('error', function(err) {
      // This is not a "Second reject", just a different sort of failure
      reject(err);
    });
    request.end();
  });
};
