import express from "express";
import ConnectionDb from "../server/database/db.js";
import route from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 8000;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", route);
ConnectionDb();

app.listen(PORT, () => {
  console.log(`server is running on sucessfull in PORT : ${PORT}`);
});
