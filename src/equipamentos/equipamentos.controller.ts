import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
// import { Equipamento } from './equipamentos.entity';
import { EquipamentosService } from './equipamentos.service';


@Controller('equipamentos')
export class EquipamentosController {
    constructor (private equipamentoService:EquipamentosService){}


    @Get()
    async listAllEquipamentos(): Promise<string>{
        return this.equipamentoService.listAllEquipamentos()
        // const msg = 'Listou equipamentos'
        // return msg
        }

    @Get(':id')
    async getCliente(@Param('id') id: string): Promise<string>{
        return this.equipamentoService.getCliente(id)
    }

    @Post()
    async createEquipamento(): Promise<string>{
        const msg = 'Criou Equipamento'
        return msg
    }

    @Put(':id')
    async updateEquipamento(@Param('id') id: string, @Body() data:string){
        return {id,data};
    } 

    @Patch(':id')
    async  upadateDataEquipamento(@Param('id') id: string, @Body() data: string){
        return {id, data}
    }

    @Delete(':id')
    async deleteEquipamento(@Param('id') id:string){
        const msg = 'Apagou registro'
        return {id,msg}
    }

}
