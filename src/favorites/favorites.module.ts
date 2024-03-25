import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FavoritesController],
  providers: [FavoritesService],
  imports: [PrismaModule],
  exports: [FavoritesService],
})
export class FavoritesModule {}
