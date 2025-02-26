import {pgTable, serial, varchar} from "drizzle-orm/pg-core";
import {createSelectSchema} from "drizzle-zod";
import {relations} from "drizzle-orm";
import {subcategories} from "./subcategories";

export const categories = pgTable('categories', {
    id: serial('id').primaryKey(),
    name: varchar('title', {length: 255}).notNull(),
    path: varchar('path', {length: 255}).notNull(),
    url: varchar('url', {length: 255})
})

export const categoriesRelations = relations(categories, ({many}) => ({
    subcategories: many(subcategories)
}))

export const categoriesSelectSchema = createSelectSchema(categories);
