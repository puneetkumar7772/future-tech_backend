const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const developerRoutes = require('./routes/developerRoutes');
const contactRoutes = require('./routes/contactRoutes');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5500;
app.use(bodyParser.json());
app.use(cors());

app.use('/api/user', userRoutes);
app.use('/api/user', developerRoutes);
app.use('/api/user', contactRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
