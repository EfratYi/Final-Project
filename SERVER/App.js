const express = require('express');
const path = require('path');
const app = express();
app.use (express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

const login=require("./routes/loginRoute")
app.use("/logIn", login);

const gallery=require("./routes/galleryRoute")
app.use("/gallery", gallery);

const disabledQueuas=require("./routes/disabledQueuasRoute")
app.use("/disabledQueuas", disabledQueuas);

const accessories=require("./routes/accessoriesRoute")
app.use("/accessories", accessories);

const dresses=require("./routes/dressesRoute")
app.use("/dresses", dresses);

const orders=require("./routes/ordersRoute")
app.use("/orders", orders);

const queues=require("./routes/queuesRoute")
app.use("/queues", queues);

const users=require("./routes/usersRoute")
app.use("/users", users);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
