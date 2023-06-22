import { MigrationInterface, QueryRunner } from "typeorm";

export class Commit1686938560486 implements MigrationInterface {
    name = 'Commit1686938560486'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" ADD "nsleft" integer NOT NULL DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "category" ADD "nsright" integer NOT NULL DEFAULT '2'`);
        await queryRunner.query(`ALTER TABLE "category" ADD "padreId" integer`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_a8aab8ee4fae95f98862673d979" FOREIGN KEY ("padreId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_a8aab8ee4fae95f98862673d979"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "padreId"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "nsright"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "nsleft"`);
    }

}
