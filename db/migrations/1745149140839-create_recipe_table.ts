import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRecipeTable1745149140839 implements MigrationInterface {
  name = 'CreateRecipeTable1745149140839';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`recipe\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`slug\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`ingredients\` varchar(255) NOT NULL, \`instructions\` varchar(255) NOT NULL, \`preparationTime\` int NOT NULL, \`cookingTime\` int NOT NULL, \`totalTime\` int NOT NULL, \`servings\` int NOT NULL, \`image\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`recipe\` ADD CONSTRAINT \`FK_fe30fdc515f6c94d39cd4bbfa76\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`recipe\` DROP FOREIGN KEY \`FK_fe30fdc515f6c94d39cd4bbfa76\``,
    );
    await queryRunner.query(`DROP TABLE \`recipe\``);
  }
}
