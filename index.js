const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users"); // Corrected path
const authRoute = require("./routes/auth");

dotenv.config();

const app = express();

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1); // Exit the process with a failure code
    }
}

// Connect to the database
connectToDatabase();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// Use routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(8080, () => {
    console.log("Server is running on port 8080!");
});
