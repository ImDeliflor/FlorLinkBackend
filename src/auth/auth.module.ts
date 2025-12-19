import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.constant';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      //signOptions: { expiresIn: '20m' }, // Tiempo de expiración para producción
      signOptions: { expiresIn: '1d' }, // Tiempo de expiración para desarrollo
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
