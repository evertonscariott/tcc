import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ProjetoEntity from './projeto.entity';

@Entity({ name: 'epico' })
export default class EpicoEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  nome: string;

  @Column({ type: 'varchar', nullable: false })
  descricao: string;

  @Column({ type: 'timestamptz' })
  dataInicio: Date;

  @Column({ type: 'timestamptz' })
  dataFim: Date;

  @Column({ type: 'integer', nullable: false })
  idProjeto: number;

  @ManyToOne(() => ProjetoEntity, (projeto: ProjetoEntity) => projeto.epicos)
  projeto: ProjetoEntity;

  constructor(
    id: number,
    nome: string,
    descricao: string,
    dataInicio: Date,
    dataFim: Date,
    projeto?: ProjetoEntity,
  ) {
    super();
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
    this.projeto = projeto;
    this.idProjeto = projeto?.id || null;
  }
}
