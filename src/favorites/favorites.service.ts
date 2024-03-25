import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FavoritesService {
  constructor(private readonly prismaService: PrismaService) {}
  async findAll() {
    const albums = await this.prismaService.favoriteAlbum.findMany({
      include: {
        album: true,
      },
    });
    const tracks = await this.prismaService.favoriteTrack.findMany({
      include: {
        track: true,
      },
    });
    const artists = await this.prismaService.favoriteArtist.findMany({
      include: {
        artist: true,
      },
    });
    return {
      albums: albums.map((album) => album.album),
      tracks: tracks.map((track) => track.track),
      artists: artists.map((artist) => artist.artist),
    };
  }

  async addTrack(id: string) {
    const track = await this.prismaService.favoriteTrack.create({
      data: {
        trackId: id,
      },
    });
    return track;
  }

  async removeTrack(id: string) {
    await this.prismaService.favoriteTrack.delete({ where: { trackId: id } });
  }

  async addAlbum(id: string) {
    const album = await this.prismaService.favoriteAlbum.create({
      data: {
        albumId: id,
      },
    });
    return album;
  }

  async removeAlbum(id: string) {
    await this.prismaService.favoriteAlbum.delete({ where: { albumId: id } });
  }

  async addArtist(id: string) {
    const artist = await this.prismaService.favoriteArtist.create({
      data: {
        artistId: id,
      },
    });
    return artist;
  }

  async removeArtist(id: string) {
    await this.prismaService.favoriteArtist.delete({ where: { artistId: id } });
  }
}
