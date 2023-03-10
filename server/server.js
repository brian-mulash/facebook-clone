const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config()

const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());

/* db setup and connection */
mongoose.connect(process.env.TEST_URI,
   {
      useNewUrlParser: true,
      useUnifiedTopology: true
   }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
   console.log("Connected successfully");
});

/* open port */
app.listen(process.env.PORT, () => {
   console.log(`server is listening on port http://localhost:${process.env.PORT}`);
})

