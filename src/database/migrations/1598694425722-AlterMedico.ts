import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class AlterMedico1598694425722 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('medicos', [
            new TableColumn({
                name: 'unidade_hospitalar_id',
                type: 'uuid',
                isNullable: true,
            }),
        ]);

        await queryRunner.addColumns('medicos', [
            new TableColumn({
                name: 'utente_id',
                type: 'uuid',
                isNullable: true,
                isUnique: true,
            }),
        ]);

        await queryRunner.createForeignKeys('medicos', [
            new TableForeignKey({
                name: 'medicoUtenteFK',
                columnNames: ['utente_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'utentes',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        ]);

        await queryRunner.createForeignKey(
            'medicos',
            new TableForeignKey({
                name: 'medicoUHospitalarFK',
                columnNames: ['unidade_hospitalar_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'unidadesHospitalares',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('medicos', 'medicoUHospitalarFK');
        await queryRunner.dropForeignKey('medicos', 'medicoUtenteFK');
        await queryRunner.dropColumn('medicos', 'utente_id');
        await queryRunner.dropColumn('medicos', 'unidade_hospitalar_id');
    }
}
