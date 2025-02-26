import {router} from "~/server/trpc/trpc";
import {create as createCategory} from '~/server/api/catalogue/categories/create'
import {getMany as getManyCategory} from '~/server/api/catalogue/categories/get-many'
import {create as createSubcategory} from '~/server/api/catalogue/subcategories/create'

export const catalogueRouter = router({
    categories: router({
        create: createCategory,
        getMany: getManyCategory,
    }),
    subcategories: router({
        create: createSubcategory
    })
})
