import { screen, fireEvent } from '@testing-library/react'
import user from '@testing-library/user-event'
import { vi, type Mock } from 'vitest'
import { AddExpenseForm } from './add-expense-form'
import { useCreateExpense } from '../../hooks/use-create-expense'
import { useModalContext } from '../ui/modal/modal-context'
import { render } from '../../testing/render'
import { useNavigateToPage } from '../../hooks/use-navigate-to-page'

// Mock dependencies
vi.mock('../../hooks/use-create-expense')
vi.mock('../ui/modal/modal-context')
vi.mock('../../utils/apollo-client')
vi.mock('@tanstack/react-router')
vi.mock('../../hooks/use-navigate-to-page')

describe('AddExpenseForm', () => {
  const mockSetOpen = vi.fn()
  const mockReset = vi.fn()
  const mockNavigateToPage = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    ;(useModalContext as Mock).mockReturnValue({ setOpen: mockSetOpen })
    ;(useCreateExpense as Mock).mockReturnValue({
      errors: {},
      reset: mockReset,
      onCompleted: vi.fn((callback) => callback()),
      register: vi.fn(),
    })
    ;(useNavigateToPage as Mock).mockReturnValue(mockNavigateToPage)
  })

  it('should render the ExpenseForm', () => {
    render(<AddExpenseForm />)
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('should handle form submission', () => {
    render(<AddExpenseForm />)
    fireEvent.submit(screen.getByRole('form'))

    // expect(mockReset).toHaveBeenCalled()
    expect(mockNavigateToPage).toHaveBeenCalledWith(1)
    expect(mockSetOpen).toHaveBeenCalledWith(false)
  })
})

// Mock dependencies
// vi.mock('../../hooks/use-create-expense')
// vi.mock('../ui/modal/modal-context')
// vi.mock('../../utils/apollo-client')
// vi.mock('@tanstack/react-router')

// const renderComponent = () => {
//   render(
//       <Modal.Provider>
//         <Modal.Trigger>
//           <button>Open modal</button>
//         </Modal.Trigger>
//         <Modal.Content>
//           <Modal.Header heading="The header" />
//           <div>The content</div>
//         </Modal.Content>
//       </Modal.Provider>
//   )
// }

// const wrapper = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <AnimalProvider initialState={initialState}>
//       <AnimalCard />
//       {children}
//     </AnimalProvider>
//   )
// }

// describe('AddExpenseForm', () => {
//   const mockSetOpen = vi.fn()
//   const mockSetPage = vi.fn()
//   const mockReset = vi.fn()
//   const mockRefetchQueries = vi.fn()

//   beforeEach(() => {
//     vi.clearAllMocks()
//     ;(useModalContext as Mock).mockReturnValue({ setOpen: mockSetOpen })
//     ;(useCreateExpense as Mock).mockReturnValue({
//       errors: {},
//       reset: mockReset,
//       onCompleted: vi.fn((callback) => callback()),
//       register: vi.fn(),
//     })
//     apolloClient.refetchQueries = mockRefetchQueries
//   })

//   it('should render the ExpenseForm', () => {
//     render(<AddExpenseForm />)
//     expect(screen.getByRole('form')).toBeInTheDocument()
//   })

//   it('should handle form submission', () => {
//     render(<AddExpenseForm />)
//     fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'New expense' } })
//     fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'Description' } })
//     fireEvent.change(screen.getByLabelText('Amount'), { target: { value: 10 } })
//     fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2022-01-01T00:00' } })
//     fireEvent.click(screen.getByRole('button', { name: 'Submit' }))

//     // expect(mockReset).toHaveBeenCalled()
//     // expect(mockRefetchQueries).toHaveBeenCalledWith({ include: [ExpensesQuery] })
//     // expect(mockSetPage).toHaveBeenCalledWith(1)
//     expect(mockSetOpen).toHaveBeenCalledWith(false)
//   })
// })
