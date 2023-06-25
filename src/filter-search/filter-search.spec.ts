import { Test, TestingModule } from '@nestjs/testing';
import { FilterSearch } from './filter-search';

describe('FilterSearch', () => {
  let provider: FilterSearch;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilterSearch],
    }).compile();

    provider = module.get<FilterSearch>(FilterSearch);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('should find all results', () => {
    const results = provider.search('it', [
      'it specialist',
      'it support',
      'marketing',
    ]);
    expect(results).toEqual(['it specialist', 'it support']);
  });
});
