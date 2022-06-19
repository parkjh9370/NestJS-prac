import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CatsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/**
 * 의존성 주입
 * AppController : 소비자
 * AppService: 제품
 * 공급자가 제공해주는 제품을 소비자가 사용하고 있음
 * Provider: 공급자
 */
