import { screen } from '@testing-library/react'

import { ExpensesList } from './expenses-list'
import type { Expense } from '../../gql/graphql'
import { render } from '../../testing/render'
import { formatDate } from '../../utils/format-date'

describe('ExpensesList', () => {
  it('should render "No data" when no expenses are provided', () => {
    render(<ExpensesList expenses={[]} />)
    expect(screen.getByText('No data')).toBeInTheDocument()
  })

  it('should render the expenses list', () => {
    const expenses: Expense[] = [
      { id: 1, date: '2022-01-01', title: 'Expense 1', description: 'Description 1', amount: 10 },
      { id: 2, date: '2022-01-02', title: 'Expense 2', description: 'Description 2', amount: 20 },
    ]

    render(<ExpensesList expenses={expenses} />)

    expect(screen.getByText('Date')).toBeInTheDocument()
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(screen.getByText('Amount')).toBeInTheDocument()

    expenses.forEach((expense) => {
      expect(screen.getByText(formatDate(expense.date))).toBeInTheDocument()
      expect(screen.getByText(expense.title)).toBeInTheDocument()
      expect(screen.getByText(expense.description as string)).toBeInTheDocument()
      expect(screen.getByText(`£${expense.amount.toFixed(2)}`)).toBeInTheDocument()
      expect(screen.getByTestId(`edit-expense-${expense.id}`)).toBeInTheDocument()
      expect(screen.getByTestId(`delete-expense-${expense.id}`)).toBeInTheDocument()
    })
  })

  it('should render the correct number of rows', () => {
    const expenses: Expense[] = [
      { id: 1, date: '2022-01-01', title: 'Expense 1', description: 'Description 1', amount: 10 },
      { id: 2, date: '2022-01-02', title: 'Expense 2', description: 'Description 2', amount: 20 },
    ]

    render(<ExpensesList expenses={expenses} />)
    expect(screen.getAllByRole('row')).toHaveLength(expenses.length + 1) // +1 for the header row
  })
})
