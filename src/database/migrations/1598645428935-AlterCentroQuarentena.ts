import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class AlterCentroQuarentena1598645428935
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'centrosQuarentena',
            new TableColumn({
                name: 'provincia_id',
                type: 'uuid',
                isNullable: true,
            }),
        );
        await queryRunner.addColumn(
            'centrosQuarentena',
            new TableColumn({
                name: 'municipio_id',
                type: 'uuid',
                isNullable: true,
            }),
        );
        await queryRunner.addColumn(
            'centrosQuarentena',
            new TableColumn({
                name: 'distrito_id',
                type: 'uuid',
                isNullable: true,
            }),
        );
        await queryRunner.createForeignKey(
            'centrosQuarentena',
            new TableForeignKey({
                name: 'ProvinciaProviderCQ',
                columnNames: ['provincia_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'provincias',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
        await queryRunner.createForeignKey(
            'centrosQuarentena',
            new TableForeignKey({
                name: 'MunicipioProviderCQ',
                columnNames: ['municipio_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'municipios',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
        await queryRunner.createForeignKey(
            'centrosQuarentena',
            new TableForeignKey({
                name: 'DistritoProviderCQ',
                columnNames: ['distrito_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'distritos',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            'centrosQuarentena',
            'DistritoProviderCQ',
        );
        await queryRunner.dropForeignKey(
            'centrosQuarentena',
            'MunicipioProviderCQ',
        );
        await queryRunner.dropForeignKey(
            'centrosQuarentena',
            'ProvinciaProviderCQ',
        );
        await queryRunner.dropColumn('centrosQuarentena', 'distrito_id');
        await queryRunner.dropColumn('centrosQuarentena', 'municipio_id');
        await queryRunner.dropColumn('centrosQuarentena', 'provincia_id');
    }
}
