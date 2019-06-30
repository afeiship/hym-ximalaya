const fs = require('fs');
const fetch = require('node-fetch');
const token = fs
  .readFileSync('./.token')
  .toString()
  .trim();
const cookie = '1&_token=' + token + ';';

// fetch('https://www.ximalaya.com/revision/main/getCurrentUser', {
//   headers: {
//     cookie
//   }
// })
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//   });

fetch('https://www.ximalaya.com/revision/comment/like', {
  method: 'POST',
  body: JSON.stringify({ trackId: 194513320, commentId: 119944909 }),
  headers: {
    Referer: 'https://www.ximalaya.com/qinggan/261139/194513320',
    'Content-Type': 'application/json',
    cookie
  }
})
  .then((res) => res.json())
  .then((res) => {
    console.log('res:->', res);
  });
