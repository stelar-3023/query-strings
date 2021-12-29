const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/test', (req, res) => {
  res.send('hitting example route');
});

// route parameters
// app.get('/example/:name/:age', (req, res) => {
//   console.log(req.params);
//   res.send(
//     `example with route params ${req.params.name}`
//   );
// });

// query string parameters
app.get('/example/:name/:age', (req, res) => {
  console.log(req.query);
  res.send(req.query.name);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
