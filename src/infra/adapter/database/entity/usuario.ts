import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn,ManyToOne } from 'typeorm';

@Entity({ name: 'usuario' })
export default class UsuarioEntity {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'varchar' } )
  email: string;

  @Column({ type: 'number' } )
  capacidade_dia: number;

  //adicionar as relações com 
  // tarefa e com quadro e com tarefa tabelas associativas 


}