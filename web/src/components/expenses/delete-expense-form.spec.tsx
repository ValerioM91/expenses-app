import { screen, fireEvent, renderHook } from '@testing-library/react'
import { vi, type Mock } from 'vitest'
import { DeleteExpenseForm } from './delete-expense-form'
import { useDeleteExpenseMutation } from '../../gql/hooks'
import { useModalContext } from '../ui/modal/modal-context'
import { Provider } from '../ui/provider'
import { ModalProvider } from '../ui/modal/modal-provider'
import type { Expense } from '../../gql/graphql'

// Mock dependencies
vi.mock('../../gql/hooks')
vi.mock('../../utils/apollo-client')
vi.mock('@tanstack/react-router')

const expense: Expense = {
  id: 1,
  title: 'Expense',
  description: 'Description',
  amount: 10,
  date: '2022-01-01',
}

const wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      <ModalProvider>
        <DeleteExpenseForm id={expense.id} />
        {children}
      </ModalProvider>
    </Provider>
  )
}

const renderForm = () => renderHook(() => useModalContext(), { wrapper })

describe('DeleteExpenseForm', () => {
  const mockMutation = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    ;(useDeleteExpenseMutation as Mock).mockReturnValue([mockMutation, { loading: false }])
  })

  it('should render the ExpenseForm', () => {
    renderForm()
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('should handle form submission', async () => {
    renderForm()

    fireEvent.submit(screen.getByRole('form'))
    expect(mockMutation).toHaveBeenCalled()
  })
})
