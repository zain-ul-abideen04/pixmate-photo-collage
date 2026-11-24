require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const AuthRouter = require('./Routes/AuthRouter');
const SocialRoute = require('./Routes/socialRoute');
const UserRouter = require('./Routes/UserRouter');
const PageRouter = require('./Routes/PageRouter');
const NavRouter = require('./Routes/NavRouter');   // NEW (baqi requires ke saath)

require('./Models/db');
const PORT = process.env.PORT || 8080;

// Pehle cors aur body parser, phir baaqi sab routes
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/backend/nav', NavRouter);                // NEW (cors aur bodyParser ke BAAD, /backend/pages wali line ke paas)


app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use('/backend/users', UserRouter);
app.use('/backend/pages', PageRouter);
app.use('/backend', AuthRouter);
app.use('/backend', SocialRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});