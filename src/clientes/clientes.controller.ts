import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cliente } from './clientes.interface.interface'
import { ClientesService } from './clientes.service'

@Controller('clientes')
export class ClientesController {

    constructor (private clientesService:ClientesService){}

    @Get()
 
    async listAllClientes(): Promise<Cliente[]> {
        return this.clientesService.listAllClientes();
    }

    @Post()
    
    createCliente(@Body() cliente: Cliente): void{
        this.clientesService.createCliente(cliente)
    }
}
