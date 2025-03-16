import { useModalContext } from '../ui/modal/modal-context'
import type { Expense } from '../../gql/graphql'
import { ExpenseForm } from './expense-form'
import { useUpdateExpense } from '../../hooks/use-update-expense'
import { useSearch } from '@tanstack/react-router'
import { useNavigateToPage } from '../../hooks/use-navigate-to-page'

export const UpdateExpenseForm = ({ expense }: { expense: Expense }) => {
  const { setOpen } = useModalContext()
  const page = useSearch({ from: '/' }).page ?? 1
  const navigateToPage = useNavigateToPage()

  const expenseHook = useUpdateExpense(expense, {
    onCompleted: () => {
      expenseHook.reset()
      navigateToPage(page) // This is to re-fetch the data from the server

      setOpen(false)
    },
  })

  return <ExpenseForm expenseHook={expenseHook} />
}
