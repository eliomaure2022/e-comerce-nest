import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1708712646768 implements MigrationInterface {
    name = ' $npmConfigName1708712646768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "totalPrice"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "totalPrice" numeric(10,2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "totalPrice"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "totalPrice" double precision NOT NULL`);
    }

}
