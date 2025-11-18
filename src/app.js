const express = require('express');
const cors = require('cors');
const userRoutes = require('./routers/user.routes');
const adminRoutes = require('./routers/admine.routes');
const app = express();

app.use(express.json());
const CorsOptions = {
    origin: process.env.frontend_url,
    optionsSuccessStatus: 200
};
app.use(cors(CorsOptions));

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);


module.exports = app;