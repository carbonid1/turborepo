-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "userId" TEXT NOT NULL DEFAULT E'ckvtv4oq10082msv5xlbmtz3k';

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
