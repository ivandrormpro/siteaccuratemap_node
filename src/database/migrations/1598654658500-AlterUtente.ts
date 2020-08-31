import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class AlterUtente1598654658500 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('utentes', [
            new TableColumn({
                name: 'distrito_id',
                type: 'uuid',
                isNullable: true,
            }),
        ]);

        await queryRunner.createForeignKeys('utentes', [
            new TableForeignKey({
                name: 'distritoUtente',
                columnNames: ['distrito_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'distritos',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('utentes', 'distritoUtente');
        await queryRunner.dropColumn('utentes', 'distrito_id');
    }
}
