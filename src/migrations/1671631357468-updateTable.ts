import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTable1671631357468 implements MigrationInterface {
    name = 'updateTable1671631357468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedulesUserProperties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" date NOT NULL, "hour" TIME NOT NULL, "propertyId" uuid, "userId" uuid, CONSTRAINT "PK_63adfdcbfb7346d6a8690014743" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedulesUserProperties" ADD CONSTRAINT "FK_1f4724dbb61095bd4c948f94b31" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedulesUserProperties" ADD CONSTRAINT "FK_b0837dd1aa84d93de024b886c4e" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedulesUserProperties" DROP CONSTRAINT "FK_b0837dd1aa84d93de024b886c4e"`);
        await queryRunner.query(`ALTER TABLE "schedulesUserProperties" DROP CONSTRAINT "FK_1f4724dbb61095bd4c948f94b31"`);
        await queryRunner.query(`DROP TABLE "schedulesUserProperties"`);
    }

}
