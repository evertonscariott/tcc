import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import TarefaEntity from './tarefa.entity';

@Entity({ name: 'tipoTarefa' })
export default class TipoTarefaEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  nome: string;

  @OneToMany(() => TarefaEntity, (item) => item.tipoTarefa)
  tarefas: TarefaEntity[];

  constructor(nome: string) {
    super();
    this.nome = nome;
  }
}
