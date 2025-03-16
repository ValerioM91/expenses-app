import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExpensesService } from './expenses.service';
import { CreateExpenseInput } from './dto/create-expense.input';
import { UpdateExpenseInput } from './dto/update-expense.input';

@Resolver('Expenses')
export class ExpensesResolver {
  constructor(private readonly expensesService: ExpensesService) {}

  @Mutation('createExpense')
  create(@Args('createExpenseInput') createExpenseInput: CreateExpenseInput) {
    return this.expensesService.create(createExpenseInput);
  }

  @Query('expenses')
  findMany(@Args('page') page: number) {
    return this.expensesService.findMany(page);
  }

  @Query('expense')
  findOne(@Args('id') id: number) {
    return this.expensesService.findOne(id);
  }

  @Query('total')
  getTotal() {
    return this.expensesService.getTotal();
  }

  @Query('pagesCount')
  getPagesCount() {
    return this.expensesService.getPagesCount();
  }

  @Mutation('updateExpense')
  update(
    @Args('id') id: number,
    @Args('updateExpenseInput') updateExpenseInput: UpdateExpenseInput,
  ) {
    return this.expensesService.update(id, updateExpenseInput);
  }

  @Mutation('deleteExpense')
  remove(@Args('id') id: number) {
    return this.expensesService.delete(id);
  }
}
