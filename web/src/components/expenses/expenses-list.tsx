import { Box, Text, Table } from '@chakra-ui/react'
import { formatDate } from '../../utils/format-date'
import { DeleteExpenseModal } from './delete-expense-modal'
import { UpdateExpenseModal } from './update-expense-modal'
import type { Expense } from '../../gql/graphql'

export const ExpensesList = ({ expenses }: { expenses?: Expense[] }) => {
  if (!expenses || expenses.length === 0) {
    return (
      <Box>
        <Text fontSize="2xl" textAlign="center">
          No expenses found. Add one to get started!
        </Text>
      </Box>
    )
  }

  return (
    <Table.ScrollArea maxW="full">
      <Table.Root borderRadius={8} lg={{ fontSize: 'md' }} overflow="hidden" p={4} showColumnBorder>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader w={44}>Date</Table.ColumnHeader>
            <Table.ColumnHeader w={96}>Title</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader w={44} textAlign="end">
              Amount
            </Table.ColumnHeader>
            <Table.ColumnHeader w={0}></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {expenses.map((expense) => (
            <Table.Row key={expense.id} cursor="pointer" position="relative">
              <Table.Cell>{formatDate(expense.date)}</Table.Cell>
              <Table.Cell>{expense.title}</Table.Cell>
              <Table.Cell textOverflow="ellipsis">{expense.description}</Table.Cell>
              <Table.Cell textAlign="end">£{expense.amount.toFixed(2)}</Table.Cell>
              <Table.Cell textAlign="end">
                <Box as="span" display="inline-flex" gap={2} aria-label="Edit and delete expense">
                  <UpdateExpenseModal expense={expense} />
                  <DeleteExpenseModal id={expense.id} />
                </Box>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  )
}
