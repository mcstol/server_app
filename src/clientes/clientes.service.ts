import {  Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { ClienteDTO } from './clientes.interface'


@Injectable()
export class ClientesService {


    constructor(@InjectRepository(Cliente) private clientesRepository: Repository <Cliente>,) { }

    // private readonly clientes: Cliente[] = [];

    async listAllClientes(): Promise<Cliente[]> {
        return this.clientesRepository.find();
    }
    // async create(cliente:Cliente){
    //     const newcliente = new this.Cliente(cliente)
    //     return this.clientesRepository.save(cliente)
    // }
    async create(data: ClienteDTO): Promise<Cliente> {
        // const user = this.clientesRepository.create(data);
        return this.clientesRepository.save(data);
        // console.log (user)
        // return user;
      }

}
