import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import QuadroEntity from './quadro.entity';

@Entity({ name: 'historia' })
export default class HistoriaEntity extends BaseEntity {
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

  @ManyToOne(() => QuadroEntity, (quadro: QuadroEntity) => quadro.historias)
  quadro: QuadroEntity;

  constructor(
    nome: string,
    descricao: string,
    dataInicio: Date,
    dataFim: Date,
    quadro?: QuadroEntity,
  ) {
    super();
    this.nome = nome;
    this.descricao = descricao;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
    this.quadro = quadro;
  }
}