import { UpdateDateColumn, CreateDateColumn, Column } from 'typeorm';

export default class SharedProp {
    @Column({
        name: 'name',
        unique: true,
        nullable: false,
    })
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
