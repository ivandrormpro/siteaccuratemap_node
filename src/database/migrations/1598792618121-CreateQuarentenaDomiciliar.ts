import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export default class CreateQuarentenaDomiciliar1598792618121
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'quarentenaDomiciliar',
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
                        name: 'endereco_domicilio',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'violou_quarentena',
                        type: 'varchar',
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

        await queryRunner.createForeignKeys('quarentenaDomiciliar', [
            new TableForeignKey({
                name: 'quarentenaDomiciliarPacienteFK',
                columnNames: ['utente_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'utentes',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'quarentenaDomiciliarMedicosFK',
                columnNames: ['medico_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'medicos',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'quarentenaDomiciliarEnfermeirosFK',
                columnNames: ['enfermeiro_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'enfermeiros',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            'quarentenaDomiciliar',
            'quarentenaDomiciliarEnfermeirosFK',
        );
        await queryRunner.dropForeignKey(
            'quarentenaDomiciliar',
            'quarentenaDomiciliarMedicosFK',
        );
        await queryRunner.dropForeignKey(
            'quarentenaDomiciliar',
            'quarentenaDomiciliarPacienteFK',
        );
        await queryRunner.dropTable('quarentenaDomiciliar');
    }
}
