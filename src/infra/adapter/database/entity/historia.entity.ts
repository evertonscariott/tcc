import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import QuadroEntity from './quadro.entity';
import TarefaEntity from './tarefa.entity';

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

  @OneToMany(() => TarefaEntity, (item) => item.tipoTarefa)
  tarefas: TarefaEntity[];

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
