const url = require('url');

module.exports = function (req, res) {
  const reqUrl = url.parse(req.url, true);
  //var name = 'World';
  console.log(reqUrl.query);
  /* if (reqUrl.query.name) {
      name = reqUrl.query.name
  } */

  /* var response = {
      "text": "Hello " + name
  }; */

  res.statusCode = 200;
  //res.end(JSON.stringify(response));
}