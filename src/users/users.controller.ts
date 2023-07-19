import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  

  @Get()
  findAll(@GetUser() user) {
    console.log(user)
    const userId = user.id;
    return this.usersService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetUser() user) {
   
    if (user.id !== Number(id)) {
      throw new UnauthorizedException();
    }
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
