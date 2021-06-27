import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableTipoTarefa1624669521327 implements MigrationInterface {
    name = 'createTableTipoTarefa1624669521327'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tipoTarefa" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_decf71ebdedf5a50c6e3443e236" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tipoTarefa"`);
    }

}
