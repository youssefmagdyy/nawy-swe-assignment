/*
  Warnings:

  - Added the required column `unitNumber` to the `Apartment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Apartment" ADD COLUMN     "unitNumber" INTEGER NOT NULL;
