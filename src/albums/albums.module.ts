import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { DbModule } from 'src/db/db.module';
import { FavoritesModule } from 'src/favorites/favorites.module';

@Module({
  controllers: [AlbumsController],
  providers: [AlbumsService],
  imports: [DbModule, FavoritesModule],
})
export class AlbumsModule {}
