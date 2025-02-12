import pg from "pg";
import {drizzle} from "drizzle-orm/node-postgres";

const client = new pg.Client({
    connectionString: import.meta.env.DB_URL,
});
await client.connect();

export const db = drizzle(client);
