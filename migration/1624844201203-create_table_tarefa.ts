import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableTarefa1624844201203 implements MigrationInterface {
  name = 'createTableTarefa1624844201203';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tarefa" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "tempoEstimado" character varying NOT NULL, "tempoRealizado" character varying NOT NULL, "tipoTarefaId" integer, "listaId" integer, "historiaId" integer, CONSTRAINT "PK_df7268dfad5b4b665bcee2ae8b5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "tarefa_etiquetas_etiqueta" ("tarefaId" integer NOT NULL, "etiquetaId" integer NOT NULL, CONSTRAINT "PK_14031862b3ac5d8090722e7ea09" PRIMARY KEY ("tarefaId", "etiquetaId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4bb6c3d089fb6dd005cd09a6dd" ON "tarefa_etiquetas_etiqueta" ("tarefaId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_2f01e3dce5289cf6f78b6d6d36" ON "tarefa_etiquetas_etiqueta" ("etiquetaId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "tarefa" ADD CONSTRAINT "FK_ec2ed7832c83e2212db0b8e4fab" FOREIGN KEY ("tipoTarefaId") REFERENCES "tipoTarefa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "tarefa" ADD CONSTRAINT "FK_940454cd9ca31b693867906011a" FOREIGN KEY ("listaId") REFERENCES "lista"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "tarefa" ADD CONSTRAINT "FK_dedd936e1500f612fb874ae56f3" FOREIGN KEY ("historiaId") REFERENCES "historia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "tarefa_etiquetas_etiqueta" ADD CONSTRAINT "FK_4bb6c3d089fb6dd005cd09a6ddf" FOREIGN KEY ("tarefaId") REFERENCES "tarefa"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "tarefa_etiquetas_etiqueta" ADD CONSTRAINT "FK_2f01e3dce5289cf6f78b6d6d368" FOREIGN KEY ("etiquetaId") REFERENCES "etiqueta"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tarefa_etiquetas_etiqueta" DROP CONSTRAINT "FK_2f01e3dce5289cf6f78b6d6d368"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tarefa_etiquetas_etiqueta" DROP CONSTRAINT "FK_4bb6c3d089fb6dd005cd09a6ddf"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tarefa" DROP CONSTRAINT "FK_dedd936e1500f612fb874ae56f3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tarefa" DROP CONSTRAINT "FK_940454cd9ca31b693867906011a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tarefa" DROP CONSTRAINT "FK_ec2ed7832c83e2212db0b8e4fab"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_2f01e3dce5289cf6f78b6d6d36"`);
    await queryRunner.query(`DROP INDEX "IDX_4bb6c3d089fb6dd005cd09a6dd"`);
    await queryRunner.query(`DROP TABLE "tarefa_etiquetas_etiqueta"`);
    await queryRunner.query(`DROP TABLE "tarefa"`);
  }
}
