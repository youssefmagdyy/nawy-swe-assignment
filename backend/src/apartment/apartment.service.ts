import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default prisma;

interface ApartmentFilters {
  unitName?: string;
  unitNumber?: string;
  project?: string;
  bedrooms?: number;
  bathrooms?: number;
  minPrice?: number;
  maxPrice?: number;
  minArea?: number;
  maxArea?: number;
}

// Builds a Prisma query using provided filters and returns matching apartments.
export const getAll = (filters: ApartmentFilters) => {
  const where: any = {};

  // Text-based filters (case-insensitive)
  if (filters.unitName) where.unitName = { contains: filters.unitName, mode: "insensitive" };
  if (filters.unitNumber) where.unitNumber = { contains: filters.unitNumber, mode: "insensitive" };
  if (filters.project) where.project = { contains: filters.project, mode: "insensitive" };
  
  if (filters.bedrooms) where.bedrooms = filters.bedrooms;
  if (filters.bathrooms) where.bathrooms = filters.bathrooms;

  if (filters.minPrice || filters.maxPrice) {
    where.price = {};
    if (filters.minPrice) where.price.gte = filters.minPrice;
    if (filters.maxPrice) where.price.lte = filters.maxPrice;
  }

  if (filters.minArea || filters.maxArea) {
    where.area = {};
    if (filters.minArea) where.area.gte = filters.minArea;
    if (filters.maxArea) where.area.lte = filters.maxArea;
  }
  
  // Query apartments with the constructed filter object
  return prisma.apartment.findMany({ where });
};

export const getById = (id: number) => prisma.apartment.findUnique({ where: { id } });

export const create = (data: any) => prisma.apartment.create({ data });
