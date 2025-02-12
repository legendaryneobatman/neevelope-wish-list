import {defineConfig} from "drizzle-kit";

export default defineConfig({
    schema: './server/models',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DB_URL || '',
        ssl:  {
            rejectUnauthorized: false
        },
    },
});

console.log(process.env.DB_HOST)
