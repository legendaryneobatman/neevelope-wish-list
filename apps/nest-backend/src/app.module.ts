import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { CategoriesModule } from './categories/categories.module';
import configuration from './config/configuration';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration] }), UserModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
