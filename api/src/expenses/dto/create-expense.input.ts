import { Min, MinLength } from 'class-validator';
import { CreateExpenseInput as TCreateExpenseInput } from '../../graphql';

export class CreateExpenseInput extends TCreateExpenseInput {
  @MinLength(1)
  declare title: string;

  @Min(0)
  declare amount: number;
}
