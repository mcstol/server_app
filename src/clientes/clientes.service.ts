import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { ClienteDTO } from './clientes.interface'


@Injectable()
export class ClientesService {


    constructor(@InjectRepository(Cliente) private clientesRepository: Repository <Cliente>,) { }

    async createCliente(data: ClienteDTO): Promise<Cliente> {
        return this.clientesRepository.save(data);
    }
    
    async listAllClientes(): Promise<Cliente[]> {
        return this.clientesRepository.find();
    }

    async getCliente(id: string): Promise<Cliente>{
        return this.clientesRepository.findOneOrFail(id)
    }

    async updateCliente(id: string, data: ClienteDTO): Promise<Cliente>{
        await this.clientesRepository.findOneOrFail(id)
        await this.clientesRepository.update(id, data)
        return this.clientesRepository.findOne(id)
    }

    async updateDataCliente(id: string, data: ClienteDTO): Promise<Cliente>{
        await this.clientesRepository.findOneOrFail(id)
        await this.clientesRepository.update(id, data)
        return this.clientesRepository.findOne(id)
    }

    async deleteCliente(id: string): Promise<Cliente>{
        const clienteDestoyer =  this.clientesRepository.findOne(id)
        await this.clientesRepository.delete(id)
        return clienteDestoyer
    }



}
