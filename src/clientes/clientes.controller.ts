import {  Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
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
     async getCliente(@Param('id') id: string): Promise<string> {
        return id;
    }


    @Post()
    async createUsers(@Body() data: ClienteDTO) {
      return  this.clientesService.create(data)
    }

    @Put(":id")
    async updateCliente(@Param('id') id:string): Promise<string>{
      return id;
    }

    @Delete(":id")
    async deleteCliente(@Param('id') id:string): Promise<string>{
      return id;
    }
      
    
  
}
