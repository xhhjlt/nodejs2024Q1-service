import { Module } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { TracksController } from './tracks.controller';
import { FavoritesModule } from 'src/favorites/favorites.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TracksController],
  providers: [TracksService],
  imports: [PrismaModule, FavoritesModule],
})
export class TracksModule {}
