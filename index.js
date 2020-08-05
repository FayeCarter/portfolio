const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(express.json());

app.get('/api', cors(), async (req, res) => {
  res.json({ status: 'success', message: 'Running' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;