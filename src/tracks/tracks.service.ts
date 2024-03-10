import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class TracksService {
  constructor(private readonly dbService: DbService) {}

  create(createTrackDto: CreateTrackDto) {
    const id = this.dbService.generateID();
    const track = { ...createTrackDto, id };
    this.dbService.tracks.push(track);
    return track;
  }

  findAll() {
    const tracks = this.dbService.tracks;
    return tracks;
  }

  findOne(id: string) {
    const track = this.dbService.tracks.find((track) => track.id === id);
    if (!track) {
      throw new HttpException('Track not found', HttpStatus.NOT_FOUND);
    }
    return track;
  }

  update(id: string, updateTrackDto: UpdateTrackDto) {
    const index = this.dbService.tracks.findIndex((track) => track.id === id);
    if (index === -1) {
      throw new HttpException('Track not found', HttpStatus.NOT_FOUND);
    }
    const [track] = this.dbService.tracks.splice(index, 1);
    const updatedTrack = { ...track, ...updateTrackDto };
    this.dbService.tracks.push(updatedTrack);
    return updatedTrack;
  }

  remove(id: string) {
    const index = this.dbService.tracks.findIndex((track) => track.id === id);
    if (index === -1) {
      throw new HttpException('Track not found', HttpStatus.NOT_FOUND);
    }
    const [track] = this.dbService.tracks.splice(index, 1);
    return track;
  }
}
