import { IconButton } from '@chakra-ui/react'
import { Modal } from '../ui/modal'
import { DeleteExpenseForm } from './delete-expense-form'
import { TbTrashX } from 'react-icons/tb'

export const DeleteExpenseModal = ({ id }: { id: number }) => {
  return (
    <Modal.Provider>
      <Modal.Trigger>
        <IconButton
          size="xs"
          bg="red.solid"
          aria-label="Delete expense"
          data-testid={`delete-expense-${id}`}
        >
          <TbTrashX />
        </IconButton>
      </Modal.Trigger>
      <Modal.Content maxW="md">
        <Modal.Header heading="Delete Expense" />
        <DeleteExpenseForm id={id} />
      </Modal.Content>
    </Modal.Provider>
  )
}
