import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'etiqueta' })
export default class EtiquetaEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  descricao: string;

  @Column({ type: 'varchar', nullable: false })
  cor: string;

  constructor(descricao: string, cor: string) {
    super();
    this.descricao = descricao;
    this.cor = cor;
  }
}
