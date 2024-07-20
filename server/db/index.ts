import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

const client = new pg.Client({
    host: import.meta.env.DB_HOST,
    port: +import.meta.env.DB_PORT,
    user: import.meta.env.DB_USER,
    password: import.meta.env.DB_PASSWORD,
    database: import.meta.env.DB_DATABASE,
});
await client.connect();
export const db = drizzle(client);

