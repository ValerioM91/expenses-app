import { Test, TestingModule } from '@nestjs/testing';
import { ExpensesService } from './expenses.service';
import { prismaMock } from '../../test/prismaMock';
import { PrismaService } from '../prisma.service';
import { mockExpenses } from '../../test/expenses.mock';

describe('ExpensesService', () => {
  let service: ExpensesService;

  const mockExpense = mockExpenses[0];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExpensesService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    })

      .compile();

    service = module.get<ExpensesService>(ExpensesService);

    prismaMock.expense.create.mockClear();
    prismaMock.expense.findMany.mockClear();
    prismaMock.expense.findUnique.mockClear();
    prismaMock.expense.update.mockClear();
    prismaMock.expense.delete.mockClear();
  });

  it('should create an expense', async () => {
    prismaMock.expense.create.mockResolvedValue({ ...mockExpense });
    const result = await service.create({
      title: mockExpense.title,
      description: mockExpense.title,
      amount: mockExpense.amount,
      date: mockExpense.date,
    });
    expect(result).toEqual({ ...mockExpense });
  });

  describe('Find Many', () => {
    it('should find all expenses', async () => {
      prismaMock.expense.findMany.mockResolvedValue([{ ...mockExpense }]);
      const result = await service.findMany(1);
      expect(result).toEqual([
        { ...mockExpense, amount: mockExpense.amount / 100 },
      ]);
    });
  });

  describe('find 0ne', () => {
    it('should find one expense', async () => {
      prismaMock.expense.findUnique.mockResolvedValue({ ...mockExpense });
      const result = await service.findOne(mockExpense.id);
      expect(result).toEqual({
        ...mockExpense,
        amount: mockExpense.amount / 100,
      });
    });
  });

  describe('get Pages Count', () => {
    it('should find one expense', async () => {
      prismaMock.expense.count.mockResolvedValue(1);
      const result = await service.getPagesCount();
      expect(result).toEqual(1);
    });
  });

  describe('get Total', () => {
    it('should find one expense', async () => {
      const total = mockExpenses.reduce((acc, { amount }) => acc + amount, 0);
      prismaMock.expense.aggregate.mockResolvedValue({
        _sum: { amount: total },
        _avg: { amount: 0 },
        _count: { amount: 0 },
        _max: { amount: 0 },
        _min: { amount: 0 },
      });
      const result = await service.getTotal();
      expect(result).toEqual(total / 100);
    });
  });

  it('should update an expense', async () => {
    const newValues = {
      title: 'new title',
      description: 'new description',
      amount: 100,
      date: new Date('2025-03-14T00:00:00.000Z'),
    };
    prismaMock.expense.update.mockResolvedValue({
      ...mockExpense,
      ...newValues,
    });
    const result = await service.update(mockExpense.id, newValues);
    expect(result).toEqual({
      ...mockExpense,
      ...newValues,
    });
  });

  it('should delete an expense', async () => {
    prismaMock.expense.delete.mockResolvedValue({ ...mockExpense });
    const result = await service.delete(mockExpense.id);
    expect(result).toEqual({ ...mockExpense });
  });
});
