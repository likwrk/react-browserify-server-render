import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './app';
var AppFactory = React.createFactory(App)
var appHtml = ReactDOMServer.renderToString(AppFactory());
fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/(<div id="react-app">).*(<\/div>)/gm, '$1' + appHtml + '$2');

  fs.writeFile('index.html', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});

fs.writeFile('app.html', appHtml, (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});