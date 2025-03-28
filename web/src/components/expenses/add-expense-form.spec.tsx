import { screen, fireEvent, renderHook } from '@testing-library/react'
import { vi, type Mock } from 'vitest'
import { AddExpenseForm } from './add-expense-form'
import { useCreateExpense } from '../../hooks/use-create-expense'
import { useModalContext } from '../ui/modal/modal-context'
import { useNavigateToPage } from '../../hooks/use-navigate-to-page'
import { Provider } from '../ui/provider'
import { ModalProvider } from '../ui/modal/modal-provider'

// Mock dependencies
vi.mock('../../hooks/use-create-expense')
vi.mock('../../utils/apollo-client')
vi.mock('@tanstack/react-router')
vi.mock('../../hooks/use-navigate-to-page')

const wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      <ModalProvider>
        <AddExpenseForm />
        {children}
      </ModalProvider>
    </Provider>
  )
}

const renderForm = () => renderHook(() => useModalContext(), { wrapper })
const mockOnSubmit = vi.fn()

describe('AddExpenseForm', () => {
  // const mockSetOpen = vi.fn()
  const mockReset = vi.fn()
  const mockNavigateToPage = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    ;(useCreateExpense as Mock).mockReturnValue({
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
