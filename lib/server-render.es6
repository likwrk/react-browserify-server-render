import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './app';
var AppFactory = React.createFactory(App)


fs.writeFile('app.html', ReactDOMServer.renderToString(AppFactory()), (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});