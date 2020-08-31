import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class AlterDistrito1598535834122 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'distritos',
            new TableColumn({
                name: 'municipio_id',
                type: 'uuid',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            'distritos',
            new TableForeignKey({
                name: 'MunicipioProviderMP',
                columnNames: ['municipio_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'municipios',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('distritos', 'MunicipioProviderMP');
        await queryRunner.dropColumn('municipios', 'municipio_id');
    }
}
