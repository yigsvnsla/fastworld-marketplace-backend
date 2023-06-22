import { MigrationInterface, QueryRunner } from "typeorm";

export class Commit1686938799588 implements MigrationInterface {
    name = 'Commit1686938799588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_a8aab8ee4fae95f98862673d979"`);
        await queryRunner.query(`ALTER TABLE "category" RENAME COLUMN "padreId" TO "parentId"`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_d5456fd7e4c4866fec8ada1fa10" FOREIGN KEY ("parentId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_d5456fd7e4c4866fec8ada1fa10"`);
        await queryRunner.query(`ALTER TABLE "category" RENAME COLUMN "parentId" TO "padreId"`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_a8aab8ee4fae95f98862673d979" FOREIGN KEY ("padreId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
