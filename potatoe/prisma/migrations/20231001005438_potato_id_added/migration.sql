/*
  Warnings:

  - Added the required column `potatoId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "potatoId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Potato" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Potato_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_potatoId_fkey" FOREIGN KEY ("potatoId") REFERENCES "Potato"("id") ON DELETE CASCADE ON UPDATE CASCADE;
