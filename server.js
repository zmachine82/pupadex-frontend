const express = require('express');

const app = express();

app.use(express.static('./dist/pupadex-frontend'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/pupadex-frontend/'}
  );
});
app.listen(process.env.PORT || 8080);