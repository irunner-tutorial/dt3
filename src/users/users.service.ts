import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  findAll(userId: string) {
    
    if (!Number.isInteger(userId) ) {
      throw new BadRequestException('Invalid user');
    }

    return this.prisma.user.findMany({
      where: {
        id: Number(userId),
      }
    });
  }

  findOne(id: number) {
    return this.prisma.user.findFirst({
      where: {
        id: id,
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
