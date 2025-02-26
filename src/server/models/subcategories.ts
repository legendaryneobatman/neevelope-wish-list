import {integer, pgTable, serial, varchar} from "drizzle-orm/pg-core";
import {createSelectSchema} from "drizzle-zod";
import {relations} from "drizzle-orm";
import {categories} from "./categories";

export const subcategories = pgTable('subcategories', {
    id: serial('id').primaryKey(),
    name: varchar('title', {length: 255}).notNull(),
    path: varchar('path', {length: 255}).notNull(),
    url: varchar('url', {length: 255}),
    categoryId: integer('categoryId')
})

export const subcategoriesRelations = relations(subcategories, ({one}) => ({
    parentCategory: one(categories, {
        fields: [subcategories.categoryId],
        references: [categories.id]
    })
}))

export const subcategoriesSelectSchema = createSelectSchema(subcategories);
