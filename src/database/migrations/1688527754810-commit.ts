import { MigrationInterface, QueryRunner } from "typeorm";

export class Commit1688527754810 implements MigrationInterface {
    name = 'Commit1688527754810'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "price" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (1))`);
        await queryRunner.query(`INSERT INTO "temporary_product"("id", "name", "description", "price", "isActive") SELECT "id", "name", "description", "price", "isActive" FROM "product"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`ALTER TABLE "temporary_product" RENAME TO "product"`);
        await queryRunner.query(`CREATE TABLE "temporary_profile" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "phone" varchar NOT NULL, "email" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (1))`);
        await queryRunner.query(`INSERT INTO "temporary_profile"("id", "firstName", "lastName", "phone", "email") SELECT "id", "firstName", "lastName", "phone", "email" FROM "profile"`);
        await queryRunner.query(`DROP TABLE "profile"`);
        await queryRunner.query(`ALTER TABLE "temporary_profile" RENAME TO "profile"`);
        await queryRunner.query(`CREATE TABLE "temporary_product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "price" integer NOT NULL, "isActive" boolean NOT NULL DEFAULT (1))`);
        await queryRunner.query(`INSERT INTO "temporary_product"("id", "name", "description", "price", "isActive") SELECT "id", "name", "description", "price", "isActive" FROM "product"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`ALTER TABLE "temporary_product" RENAME TO "product"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" RENAME TO "temporary_product"`);
        await queryRunner.query(`CREATE TABLE "product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "price" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (1))`);
        await queryRunner.query(`INSERT INTO "product"("id", "name", "description", "price", "isActive") SELECT "id", "name", "description", "price", "isActive" FROM "temporary_product"`);
        await queryRunner.query(`DROP TABLE "temporary_product"`);
        await queryRunner.query(`ALTER TABLE "profile" RENAME TO "temporary_profile"`);
        await queryRunner.query(`CREATE TABLE "profile" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "phone" varchar NOT NULL, "email" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "profile"("id", "firstName", "lastName", "phone", "email") SELECT "id", "firstName", "lastName", "phone", "email" FROM "temporary_profile"`);
        await queryRunner.query(`DROP TABLE "temporary_profile"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME TO "temporary_product"`);
        await queryRunner.query(`CREATE TABLE "product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "price" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (1))`);
        await queryRunner.query(`INSERT INTO "product"("id", "name", "description", "price", "isActive") SELECT "id", "name", "description", "price", "isActive" FROM "temporary_product"`);
        await queryRunner.query(`DROP TABLE "temporary_product"`);
    }

}
