import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableLista1624837846895 implements MigrationInterface {
  name = 'createTableLista1624837846895';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "lista" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "quadroId" integer, CONSTRAINT "PK_6f78ca631bf3ed2c76a772b6c05" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "lista" ADD CONSTRAINT "FK_cb476d6335705295c2bf5e973d8" FOREIGN KEY ("quadroId") REFERENCES "quadro"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "lista" DROP CONSTRAINT "FK_cb476d6335705295c2bf5e973d8"`,
    );
    await queryRunner.query(`DROP TABLE "lista"`);
  }
}
