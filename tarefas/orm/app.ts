import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    const InsertAtividade = await prisma.atividade.create({
        data: {
            descricao: "teste",
            projeto: 3,
            data_inicio: new Date(),
            data_fim: new Date()
        }
    })
    console.log("6.1. Inserir uma atividade em algum projeto;", InsertAtividade)

    const UpdateGerenteProjeto = await prisma.projeto.update({
        where: {
            codigo: 1
        },
        data: {
            responsavel: 3
        }
    })
    console.log("6.2 Atualizar o líder de algum projeto;", UpdateGerenteProjeto)

    const ProjectwhithAtividade = await prisma.projeto.findMany({
        include: {
            atividades: true
        }
    })
    console.log("6.3 Listar todos os projetos e suas atividades",ProjectwhithAtividade)
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })