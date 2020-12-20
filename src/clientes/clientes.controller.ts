import {  Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ClienteDTO } from './clientes.interface'
import{ Cliente } from './cliente.entity'
import { ClientesService } from './clientes.service'

@Controller('clientes')
export class ClientesController {

    constructor (private clientesService:ClientesService){}

    @Get()
     async listAllClientes(): Promise<Cliente[]> {
        return this.clientesService.listAllClientes();
    }

    @Get(":id")
     async getCliente(@Param('id') id: string): Promise<Cliente> {
        return this.clientesService.getCliente(id);
    }


    @Post()
    async createCliente(@Body() data: ClienteDTO) {
      return  this.clientesService.createCliente(data)
    }

    @Put(":id")
    async updateCliente(@Param('id') id:string, @Body() data: ClienteDTO): Promise<Cliente>{
      return this.clientesService.updateCliente(id, data)
    }

    @Patch(":id")
    async updateDataCliente(@Param('id') id: string, @Body() data: ClienteDTO): Promise<Cliente>{
      return this.clientesService.updateDataCliente(id, data)
    }

    @Delete(":id")
    async deleteCliente(@Param('id') id:string): Promise<Cliente>{
      return this.clientesService.deleteCliente(id);
    }
      
    
  
}
