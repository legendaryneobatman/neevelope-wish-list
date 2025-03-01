import { pgTable, serial, varchar, date } from 'drizzle-orm/pg-core'
import { createSelectSchema } from 'drizzle-zod'
import { relations, sql } from 'drizzle-orm'
import { personalInfo } from './personalInfo'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 255 }),
  createdAt: date('created_at').defaultNow().notNull(),
  updatedAt: date('updated_at').default(sql`(CURRENT_DATE)`).$onUpdate(() => sql`(CURRENT_DATE)`),
})

export const usersRelations = relations(personalInfo, ({ one }) => ({
  personalInfo: one(users),
}))
export const usersSelectSchema = createSelectSchema(users)
