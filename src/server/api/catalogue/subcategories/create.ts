import {subcategories, subcategoriesSelectSchema} from "~/server/models";
import {eq} from "drizzle-orm";
import { publicProcedure } from '~/server/trpc/trpc';

export const subcategoryCreateDto = subcategoriesSelectSchema.pick({
    name: true,
    path: true,
    categoryId: true
})


export const create = publicProcedure
    .input(subcategoryCreateDto)
    .mutation(async ({input, ctx: {db}}) => {
        const [createdSubcategory] = await db.insert(subcategories).values({
            name: input.name,
            path: input.path,
            categoryId: input.categoryId,
        }).returning();


        if (createdSubcategory.id) {
            const [result] = await db
                .update(subcategories)
                .set({url: `/${createdSubcategory.path}-${createdSubcategory.id}`})
                .where(eq(subcategories.id, createdSubcategory.id))
                .returning();

            return result
        }
    })
