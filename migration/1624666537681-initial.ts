import { MigrationInterface, QueryRunner } from 'typeorm';

export class initial1624666537681 implements MigrationInterface {
  name = 'initial1624666537681';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "etiqueta" ("id" SERIAL NOT NULL, "descricao" character varying NOT NULL, "cor" character varying NOT NULL, CONSTRAINT "PK_621c4d2cb0f14181398ec5ddf6c" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "etiqueta"`);
  }
}
