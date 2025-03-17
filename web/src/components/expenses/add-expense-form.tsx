import { useCreateExpense } from '../../hooks/use-create-expense'
import { useModalContext } from '../ui/modal/modal-context'
import { ExpenseForm } from './expense-form'
import { useNavigateToPage } from '../../hooks/use-navigate-to-page'
import { toaster } from '../ui/toaster'
import { onErrorToast } from '../../utils/on-error-toast'

export const AddExpenseForm = () => {
  const { setOpen } = useModalContext()
  const navigateToPage = useNavigateToPage()

  const expenseHook = useCreateExpense({
    onCompleted: () => {
      toaster.create({
        title: 'Success',
        description: 'Expense added successfully',
      })
      expenseHook.reset()
      navigateToPage(1)
      setOpen(false)
    },
    onError: onErrorToast,
  })

  return <ExpenseForm expenseHook={expenseHook} />
}
