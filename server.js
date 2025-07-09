const express = require("express");

const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

const contactsRoutes = require('./routes/contacts');
app.use('/contacts', contactsRoutes);


mongodb.initDB((err) => {
    if(err) {
        console.log(err)
    }
    else {
        app.listen(port, () => {console.log(`Database is listening and Node is running on port ${port}`)});
    }
});
