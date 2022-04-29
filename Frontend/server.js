const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('./docs'));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));