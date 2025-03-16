import { Injectable } from '@nestjs/common';
import { CreateExpenseInput } from './dto/create-expense.input';
import { UpdateExpenseInput } from './dto/update-expense.input';
import { PrismaService } from '../prisma.service';

const itemsPerPage = 10;

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}
  create(createExpenseInput: CreateExpenseInput) {
    return this.prisma.expense.create({
      data: { ...createExpenseInput, amount: createExpenseInput.amount * 100 },
    });
  }

  async findMany(page: number) {
    const expenses = await this.prisma.expense.findMany({
      orderBy: { date: 'desc' },
      skip: (page - 1) * itemsPerPage,
      take: itemsPerPage,
    });

    return expenses.map((expense) => ({
      ...expense,
      amount: expense.amount / 100,
    }));
  }

  getPagesCount() {
    return this.prisma.expense
      .count()
      .then((res) => Math.ceil(res / itemsPerPage));
  }

  async getTotal() {
    const {
      _sum: { amount },
    } = await this.prisma.expense.aggregate({
      _sum: {
        amount: true,
      },
    });
    return (amount ?? 0) / 100;
  }

  async findOne(id: number) {
    const expense = await this.prisma.expense.findUnique({
      where: { id },
    });
    if (!expense) {
      return null;
    }
    return {
      ...expense,
      amount: expense.amount / 100,
    };
  }

  update(id: number, updateExpenseInput: UpdateExpenseInput) {
    const amountInCents = updateExpenseInput.amount
      ? updateExpenseInput.amount * 100
      : undefined;

    return this.prisma.expense.update({
      data: { ...updateExpenseInput, amount: amountInCents },
      where: { id },
    });
  }

  delete(id: number) {
    return this.prisma.expense.delete({
      where: { id },
    });
  }
}
