import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipamentosController } from './equipamentos.controller';
// import { Equipamento } from './equipamentos.entity';
// import { EquipamentosService } from './equipamentos.service';

@Module({
    // imports:[TypeOrmModule.forFeature([Equipamento])],
    controllers:[EquipamentosController],
    // providers:[EquipamentosService]
})
export class EquipamentosModule {}
