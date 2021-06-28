import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import HistoriaEntity from './historia.entity';
import ListaEntity from './lista.entity';
import ProjetoEntity from './projeto.entity';

@Entity({ name: 'quadro' })
export default class QuadroEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  nome: string;

  @Column({ type: 'varchar', nullable: false })
  situacao: string;

  @ManyToOne(() => ProjetoEntity, (projeto: ProjetoEntity) => projeto.quadros)
  projeto: ProjetoEntity;

  @OneToMany(() => ListaEntity, (item) => item.quadro)
  listas: ListaEntity[];

  @OneToMany(() => HistoriaEntity, (item) => item.quadro)
  historias: HistoriaEntity[];


  constructor(nome: string, situacao: string, projeto?: ProjetoEntity) {
    super();
    this.nome = nome;
    this.situacao = situacao;
    this.projeto = projeto;
  }
}
