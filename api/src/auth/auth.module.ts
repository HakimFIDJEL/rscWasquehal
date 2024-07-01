import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: '0a181b2393c40aa4ed5f1dca4b6e3f4867f3ed662b8193421a53802c0e6eb57f28c629727834c17edb1f23676a77d5e2766897573175734764d6f402ef2f9700',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
