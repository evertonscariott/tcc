import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableProjeto1624669397426 implements MigrationInterface {
  name = 'createTableProjeto1624669397426';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "projeto" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_87de7c3af72f824a860298c3c3e" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "projeto"`);
  }
}
