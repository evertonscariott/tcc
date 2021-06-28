import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableHistoria1624840872410 implements MigrationInterface {
  name = 'createTableHistoria1624840872410';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "historia" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "dataInicio" TIMESTAMP WITH TIME ZONE NOT NULL, "dataFim" TIMESTAMP WITH TIME ZONE NOT NULL, "quadroId" integer, CONSTRAINT "PK_49eb0a33b4622a927dbebc9cb8e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "historia" ADD CONSTRAINT "FK_f0e67eaa54a2c18439e048bf2bb" FOREIGN KEY ("quadroId") REFERENCES "quadro"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "historia" DROP CONSTRAINT "FK_f0e67eaa54a2c18439e048bf2bb"`,
    );
    await queryRunner.query(`DROP TABLE "historia"`);
  }
}
