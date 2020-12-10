import {  Injectable } from '@nestjs/common';
import { Cliente } from './clientes.interface.interface'
@Injectable()
export class ClientesService {
    private readonly clientes: Cliente[] = [];

    listAllClientes(): Cliente[] {
        return this.clientes;
    }

    createCliente(cliente: Cliente): void{
        console.log(cliente)
        this.clientes.push(cliente)
    }
}
