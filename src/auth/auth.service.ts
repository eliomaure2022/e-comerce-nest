import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { CartService } from 'src/cart/cart.service';
import { CreateCartDto } from 'src/cart/dto/create-cart.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly cartService: CartService
  ) {}

  async register({ username, email, password }: RegisterAuthDto) {
    const user = await this.userService.findOneByEmail(email);
    if (user) {
      throw new BadRequestException('User already exist');
    }

    const newUser = await this.userService.create({
      username,
      email,
      password: await hash(password, 10),
    });

    const createCartDto: CreateCartDto = {
      totalPrice: 0,
      userId: newUser.id, // Asigna el id del nuevo usuario
    };

    const newCart = await this.cartService.create(createCartDto);

    return { newUser, newCart };
  }

  async login({ email, password }: LoginAuthDto) {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new BadRequestException('Invalid credentials');
    }
    const token = this.jwtService.sign({ id: user.id });
    return { user, token };
  }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // // update(id: number, updateAuthDto: RegisterAuthDto) {
  // //   return `This action updates a #${id} auth`;
  // // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
