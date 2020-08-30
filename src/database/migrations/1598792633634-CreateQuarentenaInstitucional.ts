import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export default class CreateQuarentenaInstitucional1598792633634
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'quarentenaInstitucional',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'utente_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'centro_quarentena_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'medico_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'enfermeiro_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'data_entrada',
                        type: 'date',
                    },
                    {
                        name: 'data_saida',
                        type: 'date',
                    },
                    {
                        name: 'alta_medica',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'observacoes',
                        type: 'varchar',
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

        await queryRunner.createForeignKeys('quarentenaInstitucional', [
            new TableForeignKey({
                name: 'quarentenaInstitucionalPacienteFK',
                columnNames: ['utente_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'utentes',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'quarentenaInstitucionalMedicosFK',
                columnNames: ['medico_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'medicos',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'quarentenaInstitucionalEnfermeirosFK',
                columnNames: ['enfermeiro_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'enfermeiros',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'quarentenaInstitucionalCentroFK',
                columnNames: ['centro_quarentena_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'centrosQuarentena',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            'quarentenaInstitucional',
            'quarentenaInstitucionalCentroFK',
        );
        await queryRunner.dropForeignKey(
            'quarentenaInstitucional',
            'quarentenaInstitucionalEnfermeirosFK',
        );
        await queryRunner.dropForeignKey(
            'quarentenaInstitucional',
            'quarentenaInstitucionalMedicosFK',
        );
        await queryRunner.dropForeignKey(
            'quarentenaInstitucional',
            'quarentenaInstitucionalPacienteFK',
        );
        await queryRunner.dropTable('quarentenaInstitucional');
    }
}
