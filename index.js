import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.use (express.json());

app.get("/Verdureria", async (req, res) => {
  const vegetale = await prisma.vegetales.findMany();
  res.json({
    success: true,
    payload: vegetale,
    message: "Operation Successful",
  });
});


app.post("/crear_Verdureria", async (req, res) => {
  const result = await prisma.vegetales.create({
    data: req.body,
  });
  res.json(result);
});

app.delete(`/Verdureria/:id`, async (req, res) => {
  const { id } = req.params;
  const Verdureria = await prisma.vegetales.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(`La Verdureria con el id ${id} fue eliminada exitosamente`);
})

app.put("/Verdureria/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const Verdureria = await prisma.vegetales.update({
      where: { id: Number(id) },
      // req.body es la info que manda el usuario para actualizar
      data: req.body,
    });
    res.json({
      datos: datosActualizados,
      mensaje: `La Verdureria con el id ${id} fue actulizado exitosamente`,
    });
  } catch (e) {
    res.json({ error: `La Verdureria con el id ${id} no existe` });
  }
});

app.use((req, res, next) => {
  res.status(404);
  return res.json({
    success: false,
    payload: null,
    message: `APY SAYS: Endpoint not not found for path: ${req.path}`,
  });
});

app.listen(process.env.PORT || 8001, () =>
  console.log(`🚀 Server ready at: http://localhost:8001`)
);
