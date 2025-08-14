import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BoardsController } from './boards/boards.controller';
import { BoardsService } from './boards/boards.service';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [UsersModule, BoardsModule],
  controllers: [AppController, BoardsController],
  providers: [AppService, BoardsService],
})
export class AppModule {}
