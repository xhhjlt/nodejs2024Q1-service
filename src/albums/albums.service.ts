import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class AlbumsService {
  constructor(private readonly dbService: DbService) {}
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
    return album;
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    const index = this.dbService.albums.findIndex((album) => album.id === id);
    const [album] = this.dbService.albums.splice(index, 1);
    const updatedAlbum = { ...album, ...updateAlbumDto };
    this.dbService.albums.push(updatedAlbum);
    return updatedAlbum;
  }

  remove(id: string) {
    const index = this.dbService.albums.findIndex((album) => album.id === id);
    const [album] = this.dbService.albums.splice(index, 1);
    return album;
  }
}
