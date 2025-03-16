import { Test, TestingModule } from '@nestjs/testing';
import { ExpensesResolver } from './expenses.resolver';
import { ExpensesService } from './expenses.service';
import { prismaMock } from '../../test/prismaMock';
import { mockExpenses } from '../../test/expenses.mock';
import { PrismaService } from '../prisma.service';

describe('ExpensesResolver', () => {
  let resolver: ExpensesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExpensesResolver,
        ExpensesService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    resolver = module.get<ExpensesResolver>(ExpensesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('query expenses', () => {
    it('should get the expenses array', async () => {
      prismaMock.expense.findMany.mockResolvedValue(mockExpenses);
      const result = await resolver.findMany(1);
      expect(result).toEqual(
        mockExpenses.map((expense) => ({
          ...expense,
          amount: expense.amount / 100,
        })),
      );
    });
  });

  describe('query expense', () => {
    it('should get an expenses', async () => {
      const expense = mockExpenses[0];
      prismaMock.expense.findUnique.mockResolvedValue(expense);
      const result = await resolver.findOne(expense.id);
      expect(result).toEqual({ ...expense, amount: expense.amount / 100 });
    });
  });

  describe('query total', () => {
    it('should get the total', async () => {
      const total = mockExpenses.reduce((acc, { amount }) => acc + amount, 0);
      prismaMock.expense.aggregate.mockResolvedValue({
        _sum: { amount: total },
        _avg: { amount: 0 },
        _count: { amount: 0 },
        _max: { amount: 0 },
        _min: { amount: 0 },
      });
      const result = await resolver.getTotal();
      expect(result).toEqual(total / 100);
    });
  });

  describe('query pagesCount', () => {
    it('should get the pages count', async () => {
      prismaMock.expense.count.mockResolvedValue(10);
      const result = await resolver.getPagesCount();
      expect(result).toEqual(1);
    });
  });

  describe('query expense', () => {
    it('should create an expenses', async () => {
      const expense = mockExpenses[0];
      prismaMock.expense.create.mockResolvedValue(expense);
      const { id, ...payload } = expense;
      const result = await resolver.create(payload);
      expect(result).toEqual(expense);
    });
  });

  describe('mutation updateExpense', () => {
    it('should update an expenses', async () => {
      const expense = mockExpenses[0];
      prismaMock.expense.update.mockResolvedValue(expense);
      const result = await resolver.update(expense.id, expense);
      expect(result).toEqual(expense);
    });
  });

  describe('mutation removeExpense', () => {
    it('should remove an expenses', async () => {
      const expense = mockExpenses[0];
      prismaMock.expense.delete.mockResolvedValue(expense);
      const result = await resolver.remove(expense.id);
      expect(result).toEqual(expense);
    });
  });
});
