import prismaClient from "../../prisma";

class ListCategoryService {
    async execute() {

        const category = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true
            }
        })

        return category.map(({ name: label, ...res }) => ({ label, ...res }));;
    }
}

export { ListCategoryService }