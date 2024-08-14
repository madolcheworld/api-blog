import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userrouter from "./router/user-router";
import categoryrouter from "./router/category-router";
import { tokenMiddleware } from "./middleware/auth/token";

const app = express();
const port = 3000;
app.use(express.json());
app.use(tokenMiddleware);
app.use("/users", userrouter);
app.use("/category", categoryrouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
