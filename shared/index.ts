import type {users} from "~/server/models";
import type {usersGetOneDto} from "~/server/api/users/get-one";
import type {z} from "zod";


export type UsersResponse = typeof users.$inferSelect;
export type UsersGetOneDto = z.infer<typeof usersGetOneDto>
