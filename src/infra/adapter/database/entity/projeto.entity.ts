import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import EpicoEntity from './epico.entity';
import QuadroEntity from './quadro.entity';

@Entity({ name: 'projeto' })
export default class ProjetoEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  nome: string;

  @OneToMany(() => EpicoEntity, (item) => item.projeto)
  epicos: EpicoEntity[];

  @OneToMany(() => QuadroEntity, (item) => item.projeto)
  quadros: QuadroEntity[];

  constructor(nome: string) {
    super();
    this.nome = nome;
  }
}
