import { date, integer, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { createSelectSchema } from 'drizzle-zod'
import { users } from '.'

export const personalInfo = pgTable('personal-info', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  firstName: varchar('firstName', { length: 255 }),
  lastName: varchar('lastName', { length: 255 }),
  middleName: varchar('middleName', { length: 255 }),
  birthDate: date(),
  avatarFileName: text(),
})

export const personalInfoRelations = relations(personalInfo, ({ one }) => ({
  user: one(users, { fields: [personalInfo.userId], references: [users.id] }),
}))

export const personalInfoSelectSchema = createSelectSchema(personalInfo)
