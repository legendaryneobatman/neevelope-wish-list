import {RouterInput, RouterOutput} from "~/server/trpc/types";

export type GetUsersOutput = RouterOutput['user']['getUsers']

export type GetUserByIdInput = RouterInput['user']['getUserById']
export type GetUserByIdOutput = RouterOutput['user']['getUserById']

export type CreateUserInput = RouterInput['user']['getUserById']
export type CreateUserOutput = RouterOutput['user']['getUserById']
