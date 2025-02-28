const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/voters", require("./routes/voterRoutes"));
app.use("/api/candidates", require("./routes/candidateRoutes"));
app.use("/api/admins", require("./routes/adminRoutes"));
app.use(errorHandler);

app.listen(port, () =>
	console.log(`Server running on http://localhost:${port}`)
);
