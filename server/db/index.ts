import pg from "pg";
import {drizzle} from "drizzle-orm/node-postgres";
import * as schema from '@/server/models'

const client = new pg.Client({
    connectionString: import.meta.env.DB_URL,
});
await client.connect();

export const db = drizzle(client, {schema});
