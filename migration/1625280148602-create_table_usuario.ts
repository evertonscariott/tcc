import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableUsuario1625280148602 implements MigrationInterface {
  name = 'createTableUsuario1625280148602';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "usuario" character varying NOT NULL, "capacidadeDia" numeric NOT NULL, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "usuarioTarefa" ("usuarioId" integer NOT NULL, "tarefaId" integer NOT NULL, CONSTRAINT "PK_d455f66cd95cfd43a188da2852f" PRIMARY KEY ("usuarioId", "tarefaId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_68eeef681f2170002a38b6275b" ON "usuarioTarefa" ("usuarioId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_50ebd442ab2236002a48f55dfc" ON "usuarioTarefa" ("tarefaId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "usuarioQuadro" ("usuarioId" integer NOT NULL, "quadroId" integer NOT NULL, CONSTRAINT "PK_7670c4d5cc39a723824bc640199" PRIMARY KEY ("usuarioId", "quadroId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_11be9a3ccd5aab378a49fd4a2e" ON "usuarioQuadro" ("usuarioId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_19ac44b39fc5a2b11e4b94c6a7" ON "usuarioQuadro" ("quadroId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarioTarefa" ADD CONSTRAINT "FK_68eeef681f2170002a38b6275b4" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarioTarefa" ADD CONSTRAINT "FK_50ebd442ab2236002a48f55dfcd" FOREIGN KEY ("tarefaId") REFERENCES "tarefa"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarioQuadro" ADD CONSTRAINT "FK_11be9a3ccd5aab378a49fd4a2ee" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarioQuadro" ADD CONSTRAINT "FK_19ac44b39fc5a2b11e4b94c6a78" FOREIGN KEY ("quadroId") REFERENCES "quadro"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "usuarioQuadro" DROP CONSTRAINT "FK_19ac44b39fc5a2b11e4b94c6a78"`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarioQuadro" DROP CONSTRAINT "FK_11be9a3ccd5aab378a49fd4a2ee"`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarioTarefa" DROP CONSTRAINT "FK_50ebd442ab2236002a48f55dfcd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarioTarefa" DROP CONSTRAINT "FK_68eeef681f2170002a38b6275b4"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_19ac44b39fc5a2b11e4b94c6a7"`);
    await queryRunner.query(`DROP INDEX "IDX_11be9a3ccd5aab378a49fd4a2e"`);
    await queryRunner.query(`DROP TABLE "usuarioQuadro"`);
    await queryRunner.query(`DROP INDEX "IDX_50ebd442ab2236002a48f55dfc"`);
    await queryRunner.query(`DROP INDEX "IDX_68eeef681f2170002a38b6275b"`);
    await queryRunner.query(`DROP TABLE "usuarioTarefa"`);
    await queryRunner.query(`DROP TABLE "usuario"`);
  }
}
