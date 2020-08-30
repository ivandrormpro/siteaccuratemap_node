import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class AlterUnidadeHospitalar1598644360011
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'unidadesHospitalares',
            new TableColumn({
                name: 'provincia_id',
                type: 'uuid',
                isNullable: true,
            }),
        );
        await queryRunner.addColumn(
            'unidadesHospitalares',
            new TableColumn({
                name: 'municipio_id',
                type: 'uuid',
                isNullable: true,
            }),
        );
        await queryRunner.addColumn(
            'unidadesHospitalares',
            new TableColumn({
                name: 'distrito_id',
                type: 'uuid',
                isNullable: true,
            }),
        );
        await queryRunner.createForeignKey(
            'unidadesHospitalares',
            new TableForeignKey({
                name: 'ProvinciaProviderUH',
                columnNames: ['provincia_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'provincias',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
        await queryRunner.createForeignKey(
            'unidadesHospitalares',
            new TableForeignKey({
                name: 'MunicipioProviderUH',
                columnNames: ['municipio_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'municipios',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
        await queryRunner.createForeignKey(
            'unidadesHospitalares',
            new TableForeignKey({
                name: 'DistritoProviderUH',
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
            'unidadesHospitalares',
            'DistritoProviderUH',
        );
        await queryRunner.dropForeignKey(
            'unidadesHospitalares',
            'MunicipioProviderUH',
        );
        await queryRunner.dropForeignKey(
            'unidadesHospitalares',
            'ProvinciaProviderUH',
        );
        await queryRunner.dropColumn('unidadesHospitalares', 'distrito_id');
        await queryRunner.dropColumn('unidadesHospitalares', 'municipio_id');
        await queryRunner.dropColumn('unidadesHospitalares', 'provincia_id');
    }
}
