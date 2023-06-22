import { MigrationInterface, QueryRunner } from "typeorm";

export class Commit1687029649500 implements MigrationInterface {
    name = 'Commit1687029649500'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "nsleft"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "nsright"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" ADD "nsright" integer NOT NULL DEFAULT '2'`);
        await queryRunner.query(`ALTER TABLE "category" ADD "nsleft" integer NOT NULL DEFAULT '1'`);
    }

}
