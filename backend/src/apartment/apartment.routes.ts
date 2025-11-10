import { Router } from "express";
import { getAllApartments, getApartmentById, addApartment } from "./apartment.controller";
import { validateDto } from "../middleware/validate-dto";
import { ApartmentFilterDto, CreateApartmentDto } from "./apartment.dto";

const router = Router();

router.get("/", validateDto(ApartmentFilterDto,"query"), getAllApartments);
router.get("/:id", getApartmentById);
router.post("/", validateDto(CreateApartmentDto,"body"), addApartment);

export default router;
