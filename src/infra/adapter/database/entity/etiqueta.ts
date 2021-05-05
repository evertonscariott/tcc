import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'etiqueta' })
export default class EtiquetaEntity {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  decricao: string;

  @Column({ type: 'varchar' })
  cor: string;
}
