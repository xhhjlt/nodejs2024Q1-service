import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoritesService {
  findAll() {
    return `This action returns all favorites`;
  }

  addTrack(id: string) {
    return `This action add track #${id} to favorites`;
  }

  removeTrack(id: string) {
    return `This action removes track #${id} from favorites`;
  }

  addAlbum(id: string) {
    return `This action add album #${id} to favorites`;
  }

  removeAlbum(id: string) {
    return `This action removes album #${id} from favorites`;
  }

  addArtist(id: string) {
    return `This action add artist #${id} to favorites`;
  }

  removeArtist(id: string) {
    return `This action removes artist #${id} from favorites`;
  }
}
