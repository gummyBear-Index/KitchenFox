import express, { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import http from 'http';
import Promise from "bluebird";

let app_id = "721c359c";
let app_key = "bd079c2cfe694f38f386f7cdd2bd6992";

export const upcLookUp = (upc_code) => {
  return new Promise((resolve, reject) => {
    const request = http.get(`http://api.nutritionix.com/v1_1/item?upc=${upc_code}&appId=${app_id}&appKey=${app_key}`, (res) => {
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
            iteminfo.push({
              upc: upc_code,
              name: parsedData.item_name,
              quantity: parsedData.nf_serving_size_qty,
              unit: parsedData.nf_serving_size_unit.toLowerCase(),
              weight : parsedData.nf_serving_weight_grams,
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
