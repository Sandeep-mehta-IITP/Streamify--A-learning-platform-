import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import connectDB from "./lib/mongodb.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.Route.js";
import chatRoutes from "./routes/chat.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
await connectDB();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // allow frontend to send the cookies
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
