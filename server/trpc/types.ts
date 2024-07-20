import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import {AppRouter} from "~/server/trpc/routers";

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;

