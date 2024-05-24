import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

    const user = await prisma.user.findMany({
        where: {
            name: "sally"
        },
        distinct: ['name']
    })

    console.log(user)
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        // Desconecta del cliente una ves que se termina de ejecutar el script
        await prisma.$disconnect()
    })


