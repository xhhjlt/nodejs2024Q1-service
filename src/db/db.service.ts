import { Injectable } from '@nestjs/common';
import { Album } from 'src/albums/entities/album.entity';
import { Artist } from 'src/artists/entities/artist.entity';
import { Track } from 'src/tracks/entities/track.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class DbService {
  users: User[] = [];
  tracks: Track[] = [];
  albums: Album[] = [];
  artists: Artist[] = [];
  favorites: {
    artists: string[];
    albums: string[];
    tracks: string[];
  } = {
    artists: [],
    albums: [],
    tracks: [],
  };
  generateID() {
    return crypto.randomUUID();
  }
}
