require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use("/", require("./routes/users"));

// set this for production enviroment
require("./prod")(app);

const port = process.env.PORT || 5010;
const host = process.env.HOST;
app.listen(port, host, () => console.log(`Listening on port ${port}...`));
