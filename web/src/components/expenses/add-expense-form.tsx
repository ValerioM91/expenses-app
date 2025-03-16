import { useCreateExpense } from '../../hooks/use-create-expense'
import { useModalContext } from '../ui/modal/modal-context'
import { ExpenseForm } from './expense-form'
import { useNavigateToPage } from '../../hooks/use-navigate-to-page'

export const AddExpenseForm = () => {
  const { setOpen } = useModalContext()
  const navigateToPage = useNavigateToPage()

  const expenseHook = useCreateExpense({
    onCompleted: () => {
      expenseHook.reset()
      navigateToPage(1)
      setOpen(false)
    },
  })

  return <ExpenseForm expenseHook={expenseHook} />
}
