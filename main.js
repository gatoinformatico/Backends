import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient ();

async function main(){
    const nuevovegetal = await prisma.vegetales.create({
        data: {
            nombre: "Pepino",
            pais: "Costa Rica",
            precio: "1000",
            cantidad: "100",
            tipodefruta: "Fruta",
        },
        
    });

    console.log("Nuevo verdura creado: ", nuevovegetal);
    const todosverdureria = await prisma.vedureria.findMany();
    console.log("Todos los verdureria:");
    console.dir(todosverdureria,{ depth: null });

}

main()
.catch((e)=> {
console.error(e);
process.exit(1);
})

.finally(async ()=> {
    await prisma.$disconnect();
});

