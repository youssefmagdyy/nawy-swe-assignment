import express from "express";
import cors from "cors";
import apartmentRoutes from "./apartment/apartment.routes";

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/api/apartments", apartmentRoutes);

export default app;
