import mongoose from "mongoose";
import config from "../config/config";

const connection = mongoose
  .connect(config.server.db, {
    // useUnifiedTopology: true,
    // useNewUrlParser: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log(`DB::connected`);
  })
  .catch((e) => {
    console.log(`DB::disconnected`);
  });
export default connection;
