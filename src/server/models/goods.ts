import {integer, pgTable, serial, timestamp, varchar} from "drizzle-orm/pg-core";
import {sql} from "drizzle-orm";
import {createSelectSchema} from "drizzle-zod";

export const goods = pgTable('goods', {
    id: serial('id').primaryKey(),
    title: varchar('title', {length: 256}).notNull(),
    quantity: integer('quantity').notNull(),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt').notNull().default(sql`CURRENT_TIMESTAMP`),
})


export const goodsSelectSchema = createSelectSchema(goods);
