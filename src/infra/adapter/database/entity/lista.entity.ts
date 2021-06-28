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

@Entity({ name: 'lista' })
export default class ListaEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  nome: string;

  @ManyToOne(() => QuadroEntity, (quadro: QuadroEntity) => quadro.listas)
  quadro: QuadroEntity;

  @OneToMany(() => TarefaEntity, (item) => item.tipoTarefa)
  tarefas: TarefaEntity[];

  constructor(nome: string, quadro?: QuadroEntity) {
    super();
    this.nome = nome;
    this.quadro = quadro;
  }
}
