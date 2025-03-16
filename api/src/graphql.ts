
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateExpenseInput {
    title: string;
    description?: Nullable<string>;
    amount: number;
    date: DateTime;
}

export class UpdateExpenseInput {
    title?: Nullable<string>;
    description?: Nullable<string>;
    amount?: Nullable<number>;
    date?: Nullable<DateTime>;
}

export class Expense {
    id: number;
    title: string;
    description?: Nullable<string>;
    amount: number;
    date: DateTime;
}

export abstract class IQuery {
    abstract expenses(page: number): Expense[] | Promise<Expense[]>;

    abstract expense(id: number): Nullable<Expense> | Promise<Nullable<Expense>>;

    abstract total(): number | Promise<number>;

    abstract pagesCount(): number | Promise<number>;
}

export abstract class IMutation {
    abstract createExpense(createExpenseInput: CreateExpenseInput): Expense | Promise<Expense>;

    abstract updateExpense(id: number, updateExpenseInput: UpdateExpenseInput): Expense | Promise<Expense>;

    abstract deleteExpense(id: number): Nullable<Expense> | Promise<Nullable<Expense>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
