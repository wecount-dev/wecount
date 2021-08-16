-- CreateEnum
CREATE TYPE "PermissionType" AS ENUM ('owner', 'admin', 'member');

-- CreateEnum
CREATE TYPE "DepositType" AS ENUM ('sponsoring', 'deposit');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('onetime', 'subscription');

-- CreateEnum
CREATE TYPE "SubscriptionPeriodUnit" AS ENUM ('day', 'week', 'month', 'year');

-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('amex', 'master', 'visa', 'discover');

-- CreateEnum
CREATE TYPE "MessageType" AS ENUM ('text', 'photo', 'movie', 'file');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "aud" VARCHAR(255) NOT NULL,
    "confirmation_sent_at" TIMESTAMP(3),
    "recovery_sent_at" TIMESTAMP(3),
    "email" VARCHAR(255),
    "phone" VARCHAR(255),
    "avatar_url" VARCHAR(255),
    "avatar_thumb_url" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "confirmed_at" TIMESTAMP(3),
    "email_confirmed_at" TIMESTAMP(3),
    "phone_confirmed_at" TIMESTAMP(3),
    "last_sign_in_at" TIMESTAMP(3),
    "role" VARCHAR(255),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Community" (
    "id" VARCHAR(50) NOT NULL,
    "isPublic" BOOLEAN,
    "name" VARCHAR(50) NOT NULL,
    "description" TEXT NOT NULL,
    "currency" VARCHAR(4) NOT NULL,
    "color" TEXT DEFAULT E'#28DB98',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "type" "PermissionType" NOT NULL,
    "accepted" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID NOT NULL,
    "communityId" VARCHAR(50) NOT NULL
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "iconUrl" TEXT,
    "communityId" VARCHAR(50) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deposit" (
    "id" VARCHAR(50) NOT NULL,
    "depositType" "DepositType" NOT NULL DEFAULT E'sponsoring',
    "paymentType" "PaymentType" NOT NULL DEFAULT E'onetime',
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "localizedPrice" VARCHAR(50) NOT NULL,
    "currency" VARCHAR(10) NOT NULL,
    "subscriptionPeriodUnit" "SubscriptionPeriodUnit",
    "subscriptionPeriod" SMALLINT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "userId" UUID,
    "communityId" VARCHAR(50),
    "topicId" VARCHAR(50),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "color" TEXT NOT NULL DEFAULT E'#AAAAAA',
    "name" VARCHAR(255) NOT NULL,
    "iconUrl" VARCHAR(1024),
    "description" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "communityId" VARCHAR(50) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreditCard" (
    "id" TEXT NOT NULL,
    "cardNumber" VARCHAR(50),
    "validDateMonth" VARCHAR(4),
    "validDateYear" VARCHAR(4),
    "twoLetterPassword" VARCHAR(2),
    "registrationNumber" VARCHAR(50),
    "description" TEXT,
    "cvv" VARCHAR(4),
    "cardType" "CardType",
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "communityId" VARCHAR(50) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feed" (
    "id" VARCHAR(50) NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "title" VARCHAR(255) NOT NULL,
    "date" TIMESTAMP(3),
    "price" DOUBLE PRECISION NOT NULL,
    "localizedPrice" VARCHAR(255),
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "communityId" VARCHAR(50) NOT NULL,
    "userId" UUID NOT NULL,
    "creditCardId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reply" (
    "id" VARCHAR(50) NOT NULL,
    "messageType" "MessageType" NOT NULL DEFAULT E'text',
    "photoURL" VARCHAR(1024),
    "movieURL" VARCHAR(1024),
    "fileURL" VARCHAR(1024),
    "text" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "communityId" VARCHAR(50),
    "feedId" VARCHAR(50),
    "userId" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reaction" (
    "id" UUID NOT NULL,
    "emoji" TEXT NOT NULL DEFAULT E'😀',
    "feedId" VARCHAR(50),
    "replyId" VARCHAR(50),
    "userId" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToFeed" (
    "A" TEXT NOT NULL,
    "B" VARCHAR(50) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Permission.userId_communityId_unique" ON "Permission"("userId", "communityId");

-- CreateIndex
CREATE UNIQUE INDEX "Reaction.replyId_userId_emoji_unique" ON "Reaction"("replyId", "userId", "emoji");

-- CreateIndex
CREATE UNIQUE INDEX "Reaction.feedId_userId_emoji_unique" ON "Reaction"("feedId", "userId", "emoji");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToFeed_AB_unique" ON "_CategoryToFeed"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToFeed_B_index" ON "_CategoryToFeed"("B");

-- AddForeignKey
ALTER TABLE "Permission" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permission" ADD FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic" ADD FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deposit" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deposit" ADD FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deposit" ADD FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditCard" ADD FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feed" ADD FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feed" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feed" ADD FOREIGN KEY ("creditCardId") REFERENCES "CreditCard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reply" ADD FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reply" ADD FOREIGN KEY ("feedId") REFERENCES "Feed"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reply" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD FOREIGN KEY ("feedId") REFERENCES "Feed"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD FOREIGN KEY ("replyId") REFERENCES "Reply"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToFeed" ADD FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToFeed" ADD FOREIGN KEY ("B") REFERENCES "Feed"("id") ON DELETE CASCADE ON UPDATE CASCADE;
