import { screen, fireEvent, renderHook } from '@testing-library/react'
import { vi, type Mock } from 'vitest'
import { useUpdateExpense } from '../../hooks/use-update-expense'
import { useModalContext } from '../ui/modal/modal-context'
import { useNavigateToPage } from '../../hooks/use-navigate-to-page'
import { Provider } from '../ui/provider'
import { ModalProvider } from '../ui/modal/modal-provider'
import { UpdateExpenseForm } from './update-expense-form'
import type { Expense } from '../../gql/graphql'

// Mock dependencies
vi.mock('../../hooks/use-update-expense')
vi.mock('../../utils/apollo-client')
vi.mock('@tanstack/react-router')
vi.mock('../../hooks/use-navigate-to-page')

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
        <UpdateExpenseForm expense={expense} />
        {children}
      </ModalProvider>
    </Provider>
  )
}

const renderForm = () => renderHook(() => useModalContext(), { wrapper })
const mockOnSubmit = vi.fn()

describe('UpdateExpenseForm', () => {
  const mockReset = vi.fn()
  const mockNavigateToPage = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    ;(useUpdateExpense as Mock).mockReturnValue({
      errors: {},
      reset: mockReset,
      onCompleted: vi.fn((callback) => callback()),
      register: vi.fn(),
      onSubmit: mockOnSubmit,
      loading: false,
    })
    ;(useNavigateToPage as Mock).mockReturnValue(mockNavigateToPage)
  })

  it('should render the ExpenseForm', () => {
    renderForm()
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('should handle form submission', async () => {
    renderForm()
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'New expense' } })
    fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'Description' } })
    fireEvent.change(screen.getByLabelText('Amount'), { target: { value: 10 } })
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2022-01-01T00:00' } })

    fireEvent.submit(screen.getByRole('form'))
    expect(mockOnSubmit).toHaveBeenCalled()
  })
})
