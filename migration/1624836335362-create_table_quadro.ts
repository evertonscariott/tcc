import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableQuadro1624836335362 implements MigrationInterface {
  name = 'createTableQuadro1624836335362';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "quadro" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "situacao" character varying NOT NULL, "projetoId" integer, CONSTRAINT "PK_1db6dcf81b3c1c36f6cba9bcc1e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "quadro" ADD CONSTRAINT "FK_63957f14085c89824ccfd06a6b1" FOREIGN KEY ("projetoId") REFERENCES "projeto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "quadro" DROP CONSTRAINT "FK_63957f14085c89824ccfd06a6b1"`,
    );
    await queryRunner.query(`DROP TABLE "quadro"`);
  }
}
