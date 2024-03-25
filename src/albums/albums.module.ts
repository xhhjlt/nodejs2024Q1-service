import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { FavoritesModule } from 'src/favorites/favorites.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AlbumsController],
  providers: [AlbumsService],
  imports: [PrismaModule, FavoritesModule],
})
export class AlbumsModule {}
