import { Module } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artists.controller';
import { FavoritesModule } from 'src/favorites/favorites.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ArtistsController],
  providers: [ArtistsService],
  imports: [PrismaModule, FavoritesModule],
})
export class ArtistsModule {}
