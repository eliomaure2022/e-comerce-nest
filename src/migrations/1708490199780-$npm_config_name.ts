import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1708490199780 implements MigrationInterface {
    name = ' $npmConfigName1708490199780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "totalPrice" double precision NOT NULL, "userId" integer NOT NULL, "status" boolean NOT NULL, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_in_order" ("id" SERIAL NOT NULL, "cartId" integer NOT NULL, "orderId" integer NOT NULL, "productId" integer NOT NULL, "quantity" integer NOT NULL, "price" numeric(10,2), "status" boolean NOT NULL, CONSTRAINT "PK_9dfdc88cc225b8f6c86627693e7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" numeric(10,2), "availableQty" integer NOT NULL, "imageUrl" character varying NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_in_cart" ("id" SERIAL NOT NULL, "cartId" integer NOT NULL, "productId" integer NOT NULL, "quantity" integer NOT NULL, "price" numeric(10,2), "status" boolean NOT NULL, CONSTRAINT "PK_81ae8841105c9cf395f4b21f845" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "totalPrice" numeric(10,2), CONSTRAINT "REL_756f53ab9466eb52a52619ee01" UNIQUE ("userId"), CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "productId" integer, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "auth" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "userId" integer, CONSTRAINT "REL_373ead146f110f04dad6084815" UNIQUE ("userId"), CONSTRAINT "PK_7e416cf6172bc5aec04244f6459" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_in_order" ADD CONSTRAINT "FK_28639dbdfa07984a9f51b6e57eb" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_in_order" ADD CONSTRAINT "FK_01830995952ed434c18ecce2c35" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_in_cart" ADD CONSTRAINT "FK_2dde23d32e98e19244ad4ae84a8" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_in_cart" ADD CONSTRAINT "FK_0afc46f69980a025619e5db46c0" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_756f53ab9466eb52a52619ee019" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_e48ea2bb8f66bb4dc33dfda5171" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "auth" ADD CONSTRAINT "FK_373ead146f110f04dad60848154" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "auth" DROP CONSTRAINT "FK_373ead146f110f04dad60848154"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_e48ea2bb8f66bb4dc33dfda5171"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_756f53ab9466eb52a52619ee019"`);
        await queryRunner.query(`ALTER TABLE "product_in_cart" DROP CONSTRAINT "FK_0afc46f69980a025619e5db46c0"`);
        await queryRunner.query(`ALTER TABLE "product_in_cart" DROP CONSTRAINT "FK_2dde23d32e98e19244ad4ae84a8"`);
        await queryRunner.query(`ALTER TABLE "product_in_order" DROP CONSTRAINT "FK_01830995952ed434c18ecce2c35"`);
        await queryRunner.query(`ALTER TABLE "product_in_order" DROP CONSTRAINT "FK_28639dbdfa07984a9f51b6e57eb"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84"`);
        await queryRunner.query(`DROP TABLE "auth"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "cart"`);
        await queryRunner.query(`DROP TABLE "product_in_cart"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "product_in_order"`);
        await queryRunner.query(`DROP TABLE "order"`);
    }

}
