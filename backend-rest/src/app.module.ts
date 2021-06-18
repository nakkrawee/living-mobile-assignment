import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { StoresModule } from './stores/stores.module';
import { CategorysModule } from './categorys/categorys.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'secret',
      database: 'store-api',
      autoLoadModels: true,
      synchronize: true,
      }),
    StoresModule,
    CategorysModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
