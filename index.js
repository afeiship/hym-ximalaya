const fs = require('fs');
const fetch = require('node-fetch');
const token = fs
  .readFileSync('./.token')
  .toString()
  .trim();
const cookie = '1&_token=' + token + ';';


fetch('https://www.ximalaya.com/revision/main/getCurrentUser', {
  headers: {
    cookie
  }
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });
