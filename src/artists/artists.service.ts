import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ArtistsService {
  constructor(private readonly dbService: DbService) {}

  create(createArtistDto: CreateArtistDto) {
    const id = this.dbService.generateID();
    const artist = { ...createArtistDto, id };
    this.dbService.artists.push(artist);
    return artist;
  }

  findAll() {
    const artists = this.dbService.artists;
    return artists;
  }

  findOne(id: string) {
    const artist = this.dbService.artists.find((artist) => artist.id === id);
    if (!artist) {
      throw new HttpException('Artist not found', HttpStatus.NOT_FOUND);
    }
    return artist;
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    const index = this.dbService.artists.findIndex(
      (artist) => artist.id === id,
    );
    if (index === -1) {
      throw new HttpException('Artist not found', HttpStatus.NOT_FOUND);
    }
    const [artist] = this.dbService.artists.splice(index, 1);
    const updatedArtist = { ...artist, ...updateArtistDto };
    this.dbService.artists.push(updatedArtist);
    return updatedArtist;
  }

  remove(id: string) {
    const index = this.dbService.artists.findIndex(
      (artist) => artist.id === id,
    );
    if (index === -1) {
      throw new HttpException('Artist not found', HttpStatus.NOT_FOUND);
    }
    const [artist] = this.dbService.artists.splice(index, 1);
    return artist;
  }
}
