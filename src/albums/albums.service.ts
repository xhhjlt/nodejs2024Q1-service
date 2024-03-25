import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { FavoritesService } from 'src/favorites/favorites.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlbumsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly favoritesService: FavoritesService,
  ) {}
  async create(createAlbumDto: CreateAlbumDto) {
    const album = await this.prismaService.album.create({
      data: createAlbumDto,
    });
    return album;
  }

  async findAll() {
    const albums = await this.prismaService.album.findMany();
    return albums;
  }

  async findOne(id: string) {
    const album = await this.prismaService.album.findUnique({ where: { id } });
    if (!album) {
      throw new HttpException('Album not found', HttpStatus.NOT_FOUND);
    }
    return album;
  }

  async update(id: string, updateAlbumDto: UpdateAlbumDto) {
    const album = await this.prismaService.album.update({
      where: { id },
      data: updateAlbumDto,
    });
    if (!album) {
      throw new HttpException('Album not found', HttpStatus.NOT_FOUND);
    }
    return album;
  }

  async remove(id: string) {
    const album = await this.prismaService.album.delete({ where: { id } });
    return album;
  }
}
