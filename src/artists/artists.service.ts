import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { FavoritesService } from 'src/favorites/favorites.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArtistsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly favoritesService: FavoritesService,
  ) {}

  async create(createArtistDto: CreateArtistDto) {
    const artist = await this.prismaService.artist.create({
      data: createArtistDto,
    });
    return artist;
  }

  async findAll() {
    const artists = await this.prismaService.artist.findMany();
    return artists;
  }

  async findOne(id: string) {
    const artist = await this.prismaService.artist.findUnique({
      where: { id },
    });
    if (!artist) {
      throw new HttpException('Artist not found', HttpStatus.NOT_FOUND);
    }
    return artist;
  }

  async update(id: string, updateArtistDto: UpdateArtistDto) {
    const artist = await this.prismaService.artist.update({
      where: { id },
      data: updateArtistDto,
    });
    if (!artist) {
      throw new HttpException('Artist not found', HttpStatus.NOT_FOUND);
    }
    return artist;
  }

  async remove(id: string) {
    const artist = await this.prismaService.artist.delete({ where: { id } });
    return artist;
  }
}
