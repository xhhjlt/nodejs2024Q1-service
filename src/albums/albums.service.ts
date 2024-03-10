import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { DbService } from 'src/db/db.service';
import { FavoritesService } from 'src/favorites/favorites.service';

@Injectable()
export class AlbumsService {
  constructor(
    private readonly dbService: DbService,
    private readonly favoritesService: FavoritesService,
  ) {}
  create(createAlbumDto: CreateAlbumDto) {
    const id = this.dbService.generateID();
    const album = { ...createAlbumDto, id };
    this.dbService.albums.push(album);
    return album;
  }

  findAll() {
    const albums = this.dbService.albums;
    return albums;
  }

  findOne(id: string) {
    const album = this.dbService.albums.find((album) => album.id === id);
    if (!album) {
      throw new HttpException('Album not found', HttpStatus.NOT_FOUND);
    }
    return album;
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    const index = this.dbService.albums.findIndex((album) => album.id === id);
    if (index === -1) {
      throw new HttpException('Album not found', HttpStatus.NOT_FOUND);
    }
    const [album] = this.dbService.albums.splice(index, 1);
    const updatedAlbum = { ...album, ...updateAlbumDto };
    this.dbService.albums.push(updatedAlbum);
    return updatedAlbum;
  }

  remove(id: string) {
    const index = this.dbService.albums.findIndex((album) => album.id === id);
    if (index === -1) {
      throw new HttpException('Album not found', HttpStatus.NOT_FOUND);
    }
    this.favoritesService.removeAlbum(id);
    const [album] = this.dbService.albums.splice(index, 1);
    return album;
  }
}
