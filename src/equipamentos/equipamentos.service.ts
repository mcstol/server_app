// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Equipamento } from './equipamentos.entity';


// @Injectable()
export class EquipamentosService {
//     constructor(@InjectRepository(Equipamento) private equipamentosRepository: Repository <Equipamento>,) { }

    async listAllEquipamentos(): Promise<string>{
        const msg = 'Listou equipamentos'
        return msg
    }

    async getCliente(id: string): Promise<string>{
        return id
    }
}
