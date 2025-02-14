import type { inferAsyncReturnType } from '@trpc/server'
import {db} from "~/server/db";

export const createContext = () => ({
    db,
})

export type Context = inferAsyncReturnType<typeof createContext>;
