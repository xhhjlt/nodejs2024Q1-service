import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class FavoritesService {
  constructor(private readonly dbService: DbService) {}
  findAll() {
    const favorites = this.dbService.favorites;
    const albums = favorites.albums.map((id) =>
      this.dbService.albums.find((album) => album.id === id),
    );
    const tracks = favorites.tracks.map((id) =>
      this.dbService.tracks.find((track) => track.id === id),
    );
    const artists = favorites.artists.map((id) =>
      this.dbService.artists.find((artist) => artist.id === id),
    );
    return {
      albums,
      tracks,
      artists,
    };
  }

  addTrack(id: string) {
    const track = this.dbService.tracks.find((track) => track.id === id);
    if (!track) {
      throw new HttpException('Track not found', HttpStatus.NOT_FOUND);
    }
    this.dbService.favorites.tracks.push(id);
    return track;
  }

  removeTrack(id: string) {
    const index = this.dbService.favorites.tracks.findIndex(
      (track) => track === id,
    );
    if (index === -1) {
      throw new HttpException('Track not found', HttpStatus.NOT_FOUND);
    }
    const [track] = this.dbService.favorites.tracks.splice(index, 1);
    return track;
  }

  addAlbum(id: string) {
    const album = this.dbService.albums.find((album) => album.id === id);
    if (!album) {
      throw new HttpException('Album not found', HttpStatus.NOT_FOUND);
    }
    this.dbService.favorites.albums.push(id);
    return album;
  }

  removeAlbum(id: string) {
    const index = this.dbService.favorites.albums.findIndex(
      (album) => album === id,
    );
    if (index === -1) {
      throw new HttpException('Album not found', HttpStatus.NOT_FOUND);
    }
    const [album] = this.dbService.favorites.albums.splice(index, 1);
    return album;
  }

  addArtist(id: string) {
    const artist = this.dbService.artists.find((artist) => artist.id === id);
    if (!artist) {
      throw new HttpException('Artist not found', HttpStatus.NOT_FOUND);
    }
    this.dbService.favorites.artists.push(id);
    return artist;
  }

  removeArtist(id: string) {
    const index = this.dbService.favorites.artists.findIndex(
      (artist) => artist === id,
    );
    if (index === -1) {
      throw new HttpException('Artist not found', HttpStatus.NOT_FOUND);
    }
    const [artist] = this.dbService.favorites.artists.splice(index, 1);
    return artist;
  }
}
