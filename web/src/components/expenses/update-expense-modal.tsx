import { IconButton } from '@chakra-ui/react'
import { Modal } from '../ui/modal'
import { UpdateExpenseForm } from './update-expense-form'
import type { Expense } from '../../gql/graphql'
import { TbEdit } from 'react-icons/tb'

export const UpdateExpenseModal = ({ expense }: { expense: Expense }) => {
  return (
    <Modal.Provider>
      <Modal.Trigger>
        <IconButton size="xs" aria-label="Edit expense" data-testid={`edit-expense-${expense.id}`}>
          <TbEdit />
        </IconButton>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header heading="Update Expense" />
        <UpdateExpenseForm expense={expense} />
      </Modal.Content>
    </Modal.Provider>
  )
}
