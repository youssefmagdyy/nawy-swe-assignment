import "reflect-metadata";
import app from "./app";

const PORT = process.env.PORT; // Injected from docker compose

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
