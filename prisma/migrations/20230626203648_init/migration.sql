-- CreateTable
CREATE TABLE "vegetales" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "pais" TEXT,
    "precio" TEXT,
    "cantidad" TEXT,
    "tipodefruta" TEXT,

    CONSTRAINT "vegetales_pkey" PRIMARY KEY ("id")
);
