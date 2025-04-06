import { ConfigFactory } from '@nestjs/config';

interface Configuration {
  DB_URL: string;
}

const configuration: ConfigFactory<Configuration> = () => ({
  DB_URL: process.env.DB_URL || '',
});

export default configuration;
