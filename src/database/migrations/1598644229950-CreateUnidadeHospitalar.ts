import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export default class CreateUnidadeHospitalar1598644229950
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'unidadesHospitalares',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: 'capacidade',
                        type: 'smallint',
                        isNullable: false,
                    },
                    {
                        name: 'distrito_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'unidadesHospitalares',
            new TableForeignKey({
                name: 'DistritoProviderUH',
                columnNames: ['distrito_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'distritos',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            'unidadesHospitalares',
            'DistritoProviderUH',
        );
        await queryRunner.dropTable('unidadesHospitalares');
    }
}
