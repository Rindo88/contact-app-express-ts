import express from "express";
import app from "./application/app";

const web = express();
web.use(app);

web.listen(3010, () => {
  console.log('server runing on http://localhost:3000')
})