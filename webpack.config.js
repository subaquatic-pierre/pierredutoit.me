/* eslint-disable */
const path = require('path');

module.exports = {
  context: path.resolve('infrastructure/lambda'),
  // Start here: /src/app.js
  entry: {
    main: path.resolve(__dirname, 'infrastructure/lambda/handler.js'),
  },
  // Put the bundled code here: /dist/app.bundle.js
  output: {
    path: path.resolve(__dirname, 'infrastructure/lambda/dist/'),
    filename: 'app.bundle.js',
  },
};
