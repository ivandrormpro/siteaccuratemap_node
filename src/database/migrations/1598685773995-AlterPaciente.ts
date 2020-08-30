import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class AlterPaciente1598685773995 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('pacientes', [
            new TableColumn({
                name: 'utente_id',
                type: 'uuid',
                isNullable: true,
                isUnique: true,
            }),
        ]);

        await queryRunner.createForeignKeys('pacientes', [
            new TableForeignKey({
                name: 'pacienteUtenteFK',
                columnNames: ['utente_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'utentes',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pacientes', 'pacienteUtenteFK');
        await queryRunner.dropColumn('pacientes', 'utente_id');
    }
}
