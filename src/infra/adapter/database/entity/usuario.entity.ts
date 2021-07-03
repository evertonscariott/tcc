import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import QuadroEntity from './quadro.entity';
import TarefaEntity from './tarefa.entity';

@Entity({ name: 'usuario' })
export default class UsuarioEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  nome: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  usuario: string;

  @Column({ type: 'numeric', nullable: false })
  capacidadeDia: number;

  @ManyToMany(() => TarefaEntity, { cascade: true })
  @JoinTable({
    name: 'usuarioTarefa',
  })
  tarefas: TarefaEntity[];

  @ManyToMany(() => QuadroEntity, { cascade: true })
  @JoinTable({
    name: 'usuarioQuadro',
  })
  quadros: QuadroEntity[];

  constructor(
    nome: string,
    email: string,
    usuario: string,
    capacidadeDia: number,
    tarefas: TarefaEntity[],
    quadros: QuadroEntity[],
  ) {
    super();
    this.nome = nome;
    this.email = email;
    this.usuario = usuario;
    this.capacidadeDia = capacidadeDia;
    this.tarefas = tarefas;
    this.quadros = quadros;
  }
}
