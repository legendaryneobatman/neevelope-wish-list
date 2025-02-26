import type { AppRouter } from '~/server/trpc/routers';
import { createTRPCNuxtClient } from 'trpc-nuxt/client';
import { httpBatchLink } from '@trpc/client';

export default defineNuxtPlugin(() => {
    const client = createTRPCNuxtClient<AppRouter>({
        links: [
            httpBatchLink({
                url: '/api/trpc',
            }),
        ],
    })

    return {
        provide: {
            client,
        },
    }
})
