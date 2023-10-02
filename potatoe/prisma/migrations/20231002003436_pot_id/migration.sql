/*
  Warnings:

  - Added the required column `potatoId` to the `Potato` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Potato" ADD COLUMN     "potatoId" INTEGER NOT NULL;
