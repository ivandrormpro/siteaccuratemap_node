import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class AlterEnfermeiro1598688701940
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('enfermeiros', [
            new TableColumn({
                name: 'unidade_hospitalar_id',
                type: 'uuid',
                isNullable: true,
            }),
        ]);

        await queryRunner.addColumns('enfermeiros', [
            new TableColumn({
                name: 'utente_id',
                type: 'uuid',
                isNullable: true,
                isUnique: true,
            }),
        ]);

        await queryRunner.createForeignKeys('enfermeiros', [
            new TableForeignKey({
                name: 'enfermeiroUtenteFK',
                columnNames: ['utente_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'utentes',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        ]);

        await queryRunner.createForeignKey(
            'enfermeiros',
            new TableForeignKey({
                name: 'enfermeiroUHospitalarFK',
                columnNames: ['unidade_hospitalar_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'unidadesHospitalares',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            'enfermeiros',
            'enfermeiroUHospitalarFK',
        );
        await queryRunner.dropForeignKey('enfermeiros', 'enfermeiroUtenteFK');
        await queryRunner.dropColumn('enfermeiros', 'utente_id');
        await queryRunner.dropColumn('enfermeiros', 'unidade_hospitalar_id');
    }
}
