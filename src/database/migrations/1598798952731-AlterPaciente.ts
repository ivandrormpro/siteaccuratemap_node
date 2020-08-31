import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class AlterPaciente1598798952731 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('pacientes', [
            new TableColumn({
                name: 'estado_id',
                type: 'uuid',
                isNullable: true,
            }),
        ]);

        await queryRunner.createForeignKeys('pacientes', [
            new TableForeignKey({
                name: 'estadoPacienteFK',
                columnNames: ['estado_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'estadosPacientes',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pacientes', 'estadoPacienteFK');
        await queryRunner.dropColumn('pacientes', 'estado_id');
    }
}
