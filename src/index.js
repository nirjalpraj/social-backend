import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./",
});

connectDB();

// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//     app.on("error", (error) => {
//       console.log("🚀 ~ app.on ~ error:", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, ()=>{
//         console.log()
//     })
//   } catch (error) {
//     console.log("🚀 ~ ; ~ error:", error);
//   }
// })();
