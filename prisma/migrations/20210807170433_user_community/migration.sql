-- CreateTable
CREATE TABLE "User" (
    "id" VARCHAR(50) NOT NULL,
    "aud" VARCHAR(255) NOT NULL,
    "confirmation_sent_at" TIMESTAMP(3),
    "recovery_sent_at" TIMESTAMP(3),
    "email" VARCHAR(255),
    "phone" VARCHAR(255),
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
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "userId" VARCHAR(50) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Community" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
