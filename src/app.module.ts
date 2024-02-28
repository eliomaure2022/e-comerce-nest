import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { ProductInCartModule } from './product_in_cart/product_in_cart.module';
import { ProductInOrderModule } from './product_in_order/product_in_order.module';
import typeorm from './config/typeorm';



@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      renderPath: '/',
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => configService.get('typeorm')
    }),
    UserModule,
    AuthModule,
    CartModule,
    OrderModule,
    ProductModule,
    ProductInCartModule,
    ProductInOrderModule,
  ],
 
})
export class AppModule {}
