import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export default class CreateExamesMedicos1598701863725
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'examesMedicos',
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
                        name: 'tipo_exame_id',
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
                        name: 'resultado_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'data_exame',
                        type: 'date',
                    },
                    {
                        name: 'comentarios',
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

        await queryRunner.createForeignKeys('examesMedicos', [
            new TableForeignKey({
                name: 'examesPacienteFK',
                columnNames: ['paciente_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'pacientes',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'examesTiposFK',
                columnNames: ['tipo_exame_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'tiposExamesMedicos',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'exameMedicoFK',
                columnNames: ['medico_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'medicos',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'exameEnfermeiroFK',
                columnNames: ['enfermeiro_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'enfermeiros',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'exameResultadoFK',
                columnNames: ['resultado_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'resultadosExames',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('examesMedicos', 'exameResultadoFK');
        await queryRunner.dropForeignKey('examesMedicos', 'exameEnfermeiroFK');
        await queryRunner.dropForeignKey('examesMedicos', 'exameMedicoFK');
        await queryRunner.dropForeignKey('examesMedicos', 'examesTiposFK');
        await queryRunner.dropForeignKey('examesMedicos', 'examesPacienteFK');
        await queryRunner.dropTable('examesMedicos');
    }
}
