/*
  Warnings:

  - You are about to drop the column `userId` on the `Review` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "userId",
ADD COLUMN     "creatorId" TEXT NOT NULL DEFAULT E'ckvtv4oq10082msv5xlbmtz3k';

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
