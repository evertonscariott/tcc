import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn,ManyToOne } from 'typeorm';

import {projeto} from "./projeto";

@Entity({ name: 'epico' })
export default class EtiquetaEntity {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'varchar' } )
  descricao: string;

  @Column({ type: 'date' })
  data_inicio: Date;

  @Column({ type: 'date' })
  data_fim: Date;

  @ManyToOne(() => projeto, projeto => projeto.id)
    id_projeto: number;


}
