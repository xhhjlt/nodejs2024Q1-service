import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { FavoritesService } from 'src/favorites/favorites.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TracksService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly favoritesService: FavoritesService,
  ) {}

  async create(createTrackDto: CreateTrackDto) {
    const track = await this.prismaService.track.create({
      data: createTrackDto,
    });
    return track;
  }

  async findAll() {
    const tracks = await this.prismaService.track.findMany();
    return tracks;
  }

  async findOne(id: string) {
    const track = await this.prismaService.track.findUnique({ where: { id } });
    if (!track) {
      throw new HttpException('Track not found', HttpStatus.NOT_FOUND);
    }
    return track;
  }

  async update(id: string, updateTrackDto: UpdateTrackDto) {
    const track = await this.prismaService.track.update({
      where: { id },
      data: updateTrackDto,
    });
    if (!track) {
      throw new HttpException('Track not found', HttpStatus.NOT_FOUND);
    }
    return track;
  }

  async remove(id: string) {
    const track = await this.prismaService.track.delete({ where: { id } });
    return track;
  }
}
