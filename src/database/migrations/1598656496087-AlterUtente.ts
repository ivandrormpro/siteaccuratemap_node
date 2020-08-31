import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class AlterUtente1598656496087 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('utentes', [
            new TableColumn({
                name: 'nacionalidade_id',
                type: 'uuid',
                isNullable: true,
            }),
            new TableColumn({
                name: 'tipo_identificacao_id',
                type: 'uuid',
                isNullable: true,
            }),
            new TableColumn({
                name: 'sexo_id',
                type: 'uuid',
                isNullable: true,
            }),
            new TableColumn({
                name: 'estado_civil_id',
                type: 'uuid',
                isNullable: true,
            }),
        ]);

        await queryRunner.createForeignKeys('utentes', [
            new TableForeignKey({
                name: 'estadoCivilUtente',
                columnNames: ['estado_civil_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'estadosCivis',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'sexoUtente',
                columnNames: ['sexo_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'sexos',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'tipoIdentificacaoUtente',
                columnNames: ['tipo_identificacao_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'tiposIdentificacao',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'nacionalidadeUtente',
                columnNames: ['nacionalidade_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'paises',
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('utentes', 'nacionalidadeUtente');
        await queryRunner.dropForeignKey('utentes', 'tipoIdentificacaoUtente');
        await queryRunner.dropForeignKey('utentes', 'sexoUtente');
        await queryRunner.dropForeignKey('utentes', 'estadoCivilUtente');
        await queryRunner.dropColumn('utentes', 'estado_civil_id');
        await queryRunner.dropColumn('utentes', 'sexo_id');
        await queryRunner.dropColumn('utentes', 'tipo_identificacao_id');
        await queryRunner.dropColumn('utentes', 'nacionalidade_id');
    }
}
