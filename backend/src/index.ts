import "reflect-metadata";
import dotenv from "dotenv";
import app from "./app";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
