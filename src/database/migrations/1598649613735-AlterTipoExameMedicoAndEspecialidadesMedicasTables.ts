import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class AlterTipoExameMedicoAndEspecialidadesMedicasTables1598649613735
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'especialidadesMedicasTotiposExamesMedicos',
            new TableColumn({
                name: 'especialidade_medica_id',
                type: 'uuid',
                isNullable: true,
            }),
        );
        await queryRunner.addColumn(
            'especialidadesMedicasTotiposExamesMedicos',
            new TableColumn({
                name: 'tipo_exame_medico_id',
                type: 'uuid',
                isNullable: true,
            }),
        );
        await queryRunner.createForeignKey(
            'especialidadesMedicasTotiposExamesMedicos',
            new TableForeignKey({
                name: 'tipoExameEspecialidadeTEXAMES',
                columnNames: ['especialidade_medica_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'especialidadesMedicas',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
        await queryRunner.createForeignKey(
            'especialidadesMedicasTotiposExamesMedicos',
            new TableForeignKey({
                name: 'tipoExameEspecialidadeTESP',
                columnNames: ['tipo_exame_medico_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'tiposExamesMedicos',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            'especialidadesMedicasTotiposExamesMedicos',
            'tipoExameEspecialidadeTESP',
        );
        await queryRunner.dropForeignKey(
            'especialidadesMedicasTotiposExamesMedicos',
            'tipoExameEspecialidadeTEXAMES',
        );
        await queryRunner.dropColumn(
            'especialidadesMedicasTotiposExamesMedicos',
            'tipoExameMedico_id',
        );
        await queryRunner.dropColumn(
            'especialidadesMedicasTotiposExamesMedicos',
            'especialidadeMedica_id',
        );
    }
}
