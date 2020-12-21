import { Test, TestingModule } from '@nestjs/testing';
import { EquipamentosService } from './equipamentos.service';

describe('EquipamentosService', () => {
  let provider: EquipamentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquipamentosService],
    }).compile();

    provider = module.get<EquipamentosService>(EquipamentosService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
