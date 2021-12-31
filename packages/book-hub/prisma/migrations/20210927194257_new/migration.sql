-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Edition" DROP CONSTRAINT "Edition_bookId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_editionId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Edition" ADD CONSTRAINT "Edition_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_editionId_fkey" FOREIGN KEY ("editionId") REFERENCES "Edition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "Account.providerId_providerAccountId_unique" RENAME TO "Account_providerId_providerAccountId_key";

-- RenameIndex
ALTER INDEX "Session.accessToken_unique" RENAME TO "Session_accessToken_key";

-- RenameIndex
ALTER INDEX "Session.sessionToken_unique" RENAME TO "Session_sessionToken_key";

-- RenameIndex
ALTER INDEX "User.email_unique" RENAME TO "User_email_key";

-- RenameIndex
ALTER INDEX "VerificationRequest.identifier_token_unique" RENAME TO "VerificationRequest_identifier_token_key";

-- RenameIndex
ALTER INDEX "VerificationRequest.token_unique" RENAME TO "VerificationRequest_token_key";
