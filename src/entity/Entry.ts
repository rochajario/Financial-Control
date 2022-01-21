import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name:"tb_entries"})
export class Entry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    value: number;

    @Column()
    type: string;

    @Column({
        nullable: false,
        default: () => Date.now.toString(), 
        type: 'timestamp',
      })
    date: Date;
}
