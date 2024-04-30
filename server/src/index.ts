import express from "express";
import mongoose from "mongoose";
import { MONGOURL, PORT } from "./constants/const";

import postRouter from "./routes/post.routes";
import authRouter from "./routes/auth.routes";
import orderRouter from "./routes/order.routes";

import session from "express-session";
import MongoStore from "connect-mongo";
import userRouter from "./routes/user.routes";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
  session({
    secret: "secret_key",
    store: MongoStore.create({
      mongoUrl: MONGOURL,
    }),
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    },
    resave: false,
    saveUninitialized: false,
  })
);
app.use("/", authRouter);
app.use("/", userRouter);
app.use("/", postRouter);
app.use("/", orderRouter);

if (MONGOURL) {
  try {
    mongoose.connect(MONGOURL);
    console.log(`Webpage connected to database`);
    app.listen(PORT, () => {
      console.log(`Server is running on http:/localhost:${PORT}/`);
    });
  } catch (error) {
    console.log(error);
  }
}
