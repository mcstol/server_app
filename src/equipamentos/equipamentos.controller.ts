import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
// import { Equipamento } from './equipamentos.entity';
// import { EquipamentosService } from './equipamentos.service';


@Controller('equipamentos')
export class EquipamentosController {
    // constructor (private equipamentoService:EquipamentosService){}


    @Get()
    async listAllEquipamentos(): Promise<string>{
        const msg = 'Listou equipamentos'
        return msg
        }

    @Get(':id')
    async getCliente(@Param('id') id: string): Promise<string>{
        return id
    }

    @Post()
    async createEquipamento(): Promise<string>{
        const msg = 'Criou Equipamento'
        return msg
    }

    @Put(':id')
    async updateCliente(@Param('id') id: string, @Body() data:string){
        return data;
    } 

}
