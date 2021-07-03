import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import EtiquetaEntity from './etiqueta.entity';
import HistoriaEntity from './historia.entity';
import ListaEntity from './lista.entity';
import TipoTarefaEntity from './tipoTarefa.entity';

@Entity({ name: 'tarefa' })
export default class TarefaEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  nome: string;

  @Column({ type: 'varchar', nullable: false })
  descricao: string;

  @Column({ type: 'varchar', nullable: false })
  tempoEstimado: string;

  @Column({ type: 'varchar', nullable: false })
  tempoRealizado: string;

  @ManyToOne(
    () => TipoTarefaEntity,
    (tipoTarefa: TipoTarefaEntity) => tipoTarefa.tarefas,
  )
  tipoTarefa: TipoTarefaEntity;

  @ManyToOne(() => ListaEntity, (lista: ListaEntity) => lista.tarefas)
  lista: ListaEntity;

  @ManyToOne(
    () => HistoriaEntity,
    (historia: HistoriaEntity) => historia.tarefas,
  )
  historia: HistoriaEntity;

  @ManyToMany(() => EtiquetaEntity, { cascade: true })
  @JoinTable()
  etiquetas: EtiquetaEntity[];

  constructor(
    nome: string,
    descricao: string,
    tempoEstimado: string,
    tempoRealizado: string,
    tipoTarefa: TipoTarefaEntity,
    lista: ListaEntity,
    historia: HistoriaEntity,
    etiquetas: EtiquetaEntity[],
  ) {
    super();
    this.nome = nome;
    this.descricao = descricao;
    this.tempoEstimado = tempoEstimado;
    this.tempoRealizado = tempoRealizado;
    this.tipoTarefa = tipoTarefa;
    this.lista = lista;
    this.historia = historia;
    this.etiquetas = etiquetas;
  }
}
