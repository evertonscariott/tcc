import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tipoTarefa' })
export default class TipoTarefaEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  nome: string;

  constructor(nome: string) {
    super();
    this.nome = nome;
  }
}
