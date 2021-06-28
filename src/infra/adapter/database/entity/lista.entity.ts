import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import QuadroEntity from './quadro.entity';

@Entity({ name: 'lista' })
export default class ListaEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  nome: string;

  @ManyToOne(() => QuadroEntity, (quadro: QuadroEntity) => quadro.listas)
  quadro: QuadroEntity;

  constructor(nome: string, quadro?: QuadroEntity) {
    super();
    this.nome = nome;
    this.quadro = quadro;
  }
}
