const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: "Arpit" },
    { id: 2, name: "QA Tester" }
  ]);
});

app.listen(3000, () => {
  console.log('Mock API running on port 3000');
});