import {pgTable, serial, varchar} from "drizzle-orm/pg-core";
import {createSelectSchema} from "drizzle-zod";
import {z} from "zod";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    firstName: varchar('firstName')
})


export const usersSelectSchema = createSelectSchema(users);
