import { Repository, EntityRepository } from 'typeorm';
import { Cart } from './entities/cart.entity';

@EntityRepository(Cart)
export class CartRepository extends Repository<Cart> {
  async findByOne(id: number): Promise<Cart | undefined> {
    return await this.findOne({ where: { id } });
  }
}
