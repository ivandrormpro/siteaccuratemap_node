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
                name: 'provincia_id',
                type: 'uuid',
                isNullable: true,
            }),
            new TableColumn({
                name: 'municipio_id',
                type: 'uuid',
                isNullable: true,
            }),
            new TableColumn({
                name: 'distrito_id',
                type: 'uuid',
                isNullable: true,
            }),
        ]);

        await queryRunner.createForeignKeys('utentes', [
            new TableForeignKey({
                name: 'provinciaUtente',
                columnNames: ['provincia_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'provincias',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'municipioUtente',
                columnNames: ['municipio_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'municipios',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
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
        await queryRunner.dropForeignKey('utentes', 'municipioUtente');
        await queryRunner.dropForeignKey('utentes', 'provinciaUtente');
        await queryRunner.dropColumn('utentes', 'distrito_id');
        await queryRunner.dropColumn('utentes', 'municipio_id');
        await queryRunner.dropColumn('utentes', 'provincia_id');
    }
}
