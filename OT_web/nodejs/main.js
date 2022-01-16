const http = require("http");
const fs = require("fs");
const url = require("url");

const app = http.createServer(function (request, response) {
  let _url = request.url;
  const queryData = url.parse(_url, true).query;
  const pathname = url.parse(_url, true).pathname;

  if (pathname === "/") {
    if (queryData.id === undefined) {
      fs.readdir("./data", function (err, filelist) {
        const title = "Welcome";
        const description = "Hello, Node.js";
        let list = `<ol>`;
        for (let i = 0; i < filelist.length; i++) {
          list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        }
        list += `</ol>`;

        const template = `
        <!doctype html>
        <html>
        <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        </head>
        <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        <h2>${title}</h2>
        <p>${description}</p>
        </body>
        </html>
        `;
        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readdir("./data", function (err, filelist) {
        let list = `<ol>`;
        for (let i = 0; i < filelist.length; i++) {
          list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        }
        list += `</ol>`;
        fs.readFile(
          `data/${queryData.id}`,
          "utf8",
          function (err, description) {
            let title = queryData.id;
            const template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      <h2>${title}</h2>
      <p>${description}</p>
      </body>
      </html>
      `;
            response.writeHead(200);
            response.end(template);
          }
        );
      });
    }
  } else {
    response.writeHead(404);
    response.end("Not found");
  }
});
app.listen(3000);
