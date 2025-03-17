import { screen, fireEvent } from '@testing-library/react'
import { ExpenseForm } from './expense-form'
import { useCreateExpense } from '../../hooks/use-create-expense'
import type { Mock } from 'vitest'
import { render } from '../../testing/render'

vi.mock('../../hooks/use-create-expense')

describe('ExpenseForm', () => {
  const mockUseCreateExpense = useCreateExpense as Mock

  beforeEach(() => {
    mockUseCreateExpense.mockReturnValue({
      onSubmit: vi.fn(),
      register: vi.fn(),
      errors: {},
      loading: false,
    })
  })

  it('should render the form correctly', () => {
    render(<ExpenseForm expenseHook={mockUseCreateExpense()} />)

    expect(screen.getByLabelText('Title')).toBeInTheDocument()
    expect(screen.getByLabelText('Description')).toBeInTheDocument()
    expect(screen.getByLabelText('Amount')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('should allow form fields to be filled', () => {
    render(<ExpenseForm expenseHook={mockUseCreateExpense()} />)

    const titleInput = screen.getByLabelText('Title')
    const descriptionInput = screen.getByLabelText('Description')
    const amountInput = screen.getByLabelText('Amount')
    const dateInput = screen.getByLabelText('Date')

    fireEvent.change(titleInput, { target: { value: 'Test Title' } })
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } })
    fireEvent.change(amountInput, { target: { value: '100' } })
    fireEvent.change(dateInput, { target: { value: '2022-01-01T00:00' } })

    expect(titleInput).toHaveValue('Test Title')
    expect(descriptionInput).toHaveValue('Test Description')
    expect(amountInput).toHaveValue(100)
    expect(dateInput).toHaveValue('2022-01-01T00:00')
  })

  it('should call onSubmit when the form is submitted', () => {
    const mockOnSubmit = vi.fn()
    mockUseCreateExpense.mockReturnValue({
      onSubmit: mockOnSubmit,
      register: vi.fn(),
      errors: {},
      loading: false,
    })

    render(<ExpenseForm expenseHook={mockUseCreateExpense()} />)

    fireEvent.submit(screen.getByRole('form'))

    expect(mockOnSubmit).toHaveBeenCalled()
  })

  it('should disable the submit button when loading', () => {
    mockUseCreateExpense.mockReturnValue({
      onSubmit: vi.fn(),
      register: vi.fn(),
      errors: {},
      loading: true,
    })

    render(<ExpenseForm expenseHook={mockUseCreateExpense()} />)

    expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled()
  })
})
