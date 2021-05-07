import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn,ManyToOne } from 'typeorm';
import ProjetoEntity from './projeto';

@Entity({ name: 'quadro' })
export default class QuadroEntity {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'varchar' } )
  situacao: string;

 @ManyToOne(() => ProjetoEntity, projeto => projeto.id)
    id_projeto: number;


}