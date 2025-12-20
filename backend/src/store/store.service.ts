import { Injectable } from '@nestjs/common';
import {PrismaService} from '../prisma.service';

@Injectable()
export class StoreService {
  constructor(private readonly prisma: PrismaService) {}

  create(name: string) {
    return this.prisma.store.create({
      data: { name }
    })
  }

  findAll() {
    return this.prisma.store.findMany({
      orderBy: { id: 'asc' }
    })
  }
}
