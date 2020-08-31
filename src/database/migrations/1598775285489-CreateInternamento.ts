import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export default class CreateInternamento1598775285489
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'internamentos',
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
                        name: 'unidade_hospitalar_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'area_internamento_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'numero_cama',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'data_entrada',
                        type: 'date',
                        isNullable: true,
                    },
                    {
                        name: 'alta_medica',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'data_saida',
                        type: 'date',
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

        await queryRunner.createForeignKeys('internamentos', [
            new TableForeignKey({
                name: 'internamentoPacienteFK',
                columnNames: ['paciente_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'pacientes',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'internamentoMedicosFK',
                columnNames: ['medico_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'medicos',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'internamentoEnfermeirosFK',
                columnNames: ['enfermeiro_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'enfermeiros',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'internamentosUnidadeFK',
                columnNames: ['unidade_hospitalar_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'unidadesHospitalares',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'internamentosAreaFK',
                columnNames: ['area_internamento_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'areasInternamento',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            'internamentos',
            'internamentosAreaFK',
        );
        await queryRunner.dropForeignKey(
            'internamentos',
            'internamentosUnidadeFK',
        );
        await queryRunner.dropForeignKey(
            'internamentos',
            'internamentoEnfermeirosFK',
        );
        await queryRunner.dropForeignKey(
            'internamentos',
            'internamentoMedicosFK',
        );
        await queryRunner.dropForeignKey(
            'internamentos',
            'internamentoPacienteFK',
        );
        await queryRunner.dropTable('internamentos');
    }
}
