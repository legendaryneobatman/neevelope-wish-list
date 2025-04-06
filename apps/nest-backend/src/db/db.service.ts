import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client } from 'pg';
import { ConfigService } from '@nestjs/config';
import * as schema from '../models/index';
import { drizzle } from 'drizzle-orm/node-postgres';

@Injectable()
export class DrizzleService implements OnModuleInit {
  constructor(private configService: ConfigService) {}

  private client = new Client({
    connectionString: process.env.DB_URL,
  });

  public db = drizzle(this.client, { schema });

  async onModuleInit() {
    await this.client.connect();
    console.log('PostgreSQL connected with Drizzle');
  }

  async onModuleDestroy() {
    await this.client.end();
  }
}
