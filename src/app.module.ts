import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Cliente } from './clientes/cliente.entity';
import { ClientesModule } from './clientes/clientes.module';
import { EquipamentosModule } from './equipamentos/equipamentos.module';

@Module({
  imports: [TypeOrmModule.forRoot({

    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'marcelo',
    password: 's@ntos0L1ve1ra',
    database: 'weblog',
    entities: [Cliente],
    synchronize: true,

  }),ClientesModule, EquipamentosModule],
  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {}
