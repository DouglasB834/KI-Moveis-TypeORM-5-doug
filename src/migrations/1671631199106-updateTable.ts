import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTable1671631199106 implements MigrationInterface {
    name = 'updateTable1671631199106'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(150) NOT NULL, "email" character varying(200) NOT NULL, "password" character varying(120) NOT NULL, "isAdm" boolean NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schedulesUserProperties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" date NOT NULL, "hour" TIME NOT NULL, "propertyId" uuid, "userId" uuid, CONSTRAINT "PK_63adfdcbfb7346d6a8690014743" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedulesUserProperties" ADD CONSTRAINT "FK_1f4724dbb61095bd4c948f94b31" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedulesUserProperties" ADD CONSTRAINT "FK_b0837dd1aa84d93de024b886c4e" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedulesUserProperties" DROP CONSTRAINT "FK_b0837dd1aa84d93de024b886c4e"`);
        await queryRunner.query(`ALTER TABLE "schedulesUserProperties" DROP CONSTRAINT "FK_1f4724dbb61095bd4c948f94b31"`);
        await queryRunner.query(`DROP TABLE "schedulesUserProperties"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
