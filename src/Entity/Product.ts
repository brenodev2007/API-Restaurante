import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  preco!: number;

  @Column({ default: true })
  ativo!: boolean;
}
