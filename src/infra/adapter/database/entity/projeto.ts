import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'projeto' })
export default class EtiquetaEntity {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  nome: string;
}
