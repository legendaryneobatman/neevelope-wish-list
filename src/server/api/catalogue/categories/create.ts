import {publicProcedure} from "~/server/trpc/trpc";
import {eq} from "drizzle-orm";
import {categories, categoriesSelectSchema} from "~/server/models";

export const categoryCreateDto = categoriesSelectSchema.pick({
    name: true,
    path: true,
})

export const create = publicProcedure
    .input(categoryCreateDto)
    .mutation(async ({input, ctx: {db}}) => {
        const [createdCategory] = await db.insert(categories).values({name: input.name, path: input.path}).returning();

        if (createdCategory.id) {
            const [result] = await db
                .update(categories)
                .set({url: `/${createdCategory.path}-${createdCategory.id}`})
                .where(eq(categories.id, createdCategory.id))
                .returning();

            return result
        }
    })
