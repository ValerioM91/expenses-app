import { gql } from '@apollo/client'

export const AddExpenseMutation = gql`
  mutation CreateExpense($createExpenseInput: CreateExpenseInput!) {
    createExpense(createExpenseInput: $createExpenseInput) {
      amount
      date
      description
      id
      title
    }
  }
`

export const UpdateExpenseMutation = gql`
  mutation UpdateExpense($updateExpenseId: Int!, $updateExpenseInput: UpdateExpenseInput!) {
    updateExpense(id: $updateExpenseId, updateExpenseInput: $updateExpenseInput) {
      amount
      date
      description
      id
      title
    }
  }
`

export const DeleteExpenseMutation = gql`
  mutation DeleteExpense($removeExpenseId: Int!) {
    deleteExpense(id: $removeExpenseId) {
      id
    }
  }
`
