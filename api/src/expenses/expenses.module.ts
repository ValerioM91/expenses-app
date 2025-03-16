import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesResolver } from './expenses.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [PrismaService, ExpensesResolver, ExpensesService],
})
export class ExpensesModule {}
