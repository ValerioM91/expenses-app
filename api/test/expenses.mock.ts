import { Expense } from '@prisma/client';

export const mockExpenses: Expense[] = [
  {
    id: 1,
    title: 'title',
    description: 'description',
    amount: 100,
    date: new Date('2025-03-15T00:00:00.000Z'),
  },
  {
    id: 2,
    title: 'Groceries',
    description: 'Weekly grocery shopping',
    amount: 12000,
    date: new Date('2024-03-10T14:30:00Z'),
  },
  {
    id: 3,
    title: 'Gas',
    description: 'Fuel refill',
    amount: 4000,
    date: new Date('2024-03-09T09:30:00Z'),
  },
];
