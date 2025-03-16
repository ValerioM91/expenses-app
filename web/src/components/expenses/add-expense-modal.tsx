import { Button } from '@chakra-ui/react'
import { Modal } from '../ui/modal'
import { AddExpenseForm } from './add-expense-form'

export const AddExpenseModal = () => {
  return (
    <Modal.Provider>
      <Modal.Trigger>
        <Button>Add Expense</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header heading="Add Expense" />
        <AddExpenseForm />
      </Modal.Content>
    </Modal.Provider>
  )
}
