import { Controller, Get, Param, Delete, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Find all users
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // Find one user
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id); 
  }

  // Authenticate user
  @Post('authenticate')
  async authenticate(@Body() body: { email: string, password: string }): Promise<{ status: string, message: string }> {
    const { email, password } = body;
    return this.usersService.authenticate(email, password);
  }

  // Create one user
  @Post()
  create(@Body() user: User): Promise<{ status: string, message: string }>  {
    return this.usersService.create(user);
  }

  // Update one user
  @Post(':id')
  update(@Param('id') id: string, @Body() user: User): Promise<{ status: string, message: string }>{
    return this.usersService.update(+id, user); 
  }

  // Delete one user
  @Delete(':id')
  remove(@Param('id') id: string): Promise<{ status: string, message: string }>  {
    return this.usersService.remove(+id); 
  }

  
}
