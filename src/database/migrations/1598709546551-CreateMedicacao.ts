import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export default class CreateMedicacao1598709546551
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'medicacoes',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'paciente_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'medicamento_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'medico_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'dosagem',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'data_inicio',
                        type: 'date',
                    },
                    {
                        name: 'data_fim',
                        type: 'date',
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

        await queryRunner.createForeignKeys('medicacoes', [
            new TableForeignKey({
                name: 'medicoMedicacaoFK',
                columnNames: ['medico_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'medicos',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'medicamentoMedicacaoFK',
                columnNames: ['medicamento_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'medicamentos',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'pacienteMedicacaoFK',
                columnNames: ['paciente_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'pacientes',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('medicacoes', 'pacienteMedicacaoFK');
        await queryRunner.dropForeignKey(
            'medicacoes',
            'medicamentoMedicacaoFK',
        );
        await queryRunner.dropForeignKey('medicacoes', 'medicoMedicacaoFK');
        await queryRunner.dropTable('medicacoes');
    }
}
