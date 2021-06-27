import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableEpico1624670915954 implements MigrationInterface {
  name = 'createTableEpico1624670915954';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "epico" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "dataInicio" TIMESTAMP WITH TIME ZONE NOT NULL, "dataFim" TIMESTAMP WITH TIME ZONE NOT NULL, "idProjeto" integer NOT NULL, "projetoId" integer, CONSTRAINT "PK_d2f9c08736f8692237f17b43a75" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "epico" ADD CONSTRAINT "FK_990647ce1d966d2b63a898703f4" FOREIGN KEY ("projetoId") REFERENCES "projeto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "epico" DROP CONSTRAINT "FK_990647ce1d966d2b63a898703f4"`,
    );
    await queryRunner.query(`DROP TABLE "epico"`);
  }
}
