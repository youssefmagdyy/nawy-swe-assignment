import type { Request, Response } from "express";
import * as service from "./apartment.service";

export const getAllApartments = async (req: Request, res: Response) => {
  // Middleware attaches a `validatedQuery` object
  // containing validated and transformed filter parameters.
  const filters = (req as any).validatedQuery
  const apartments = await service.getAll(filters);
  res.json(apartments);
};

export const getApartmentById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const apartment = await service.getById(id);
  if (!apartment) return res.status(404).json({ message: "Apartment not found" });
  res.json(apartment);
};

export const addApartment = async (req: Request, res: Response) => {
  const data = req.body;
  const newApartment = await service.create(data);
  res.status(201).json(newApartment);
};
