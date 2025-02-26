import { publicProcedure } from '~/server/trpc/trpc';

export const getMany = publicProcedure
    .query( ({ctx}) => {
        return ctx.db.query.categories.findMany({
            with: {
                subcategories: true
            }
        })
    })
