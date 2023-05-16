const express = require("express");
const v1UserRouter = require("./v1/routes/userRoutes")

const app = express()
const port = process.env.PORT || 3000

app.use("/api/v1/users", v1UserRouter)

app.listen(port, () => {
    console.log("Server listening on port :",port);
});

