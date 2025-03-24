import { useCallback } from 'react'
import { UpdateExpenseInputSchema } from '../gql/validation'
import { useFormWithSchema } from '../utils/use-form-with-schema'
import type { Expense } from '../gql/graphql'
import { useUpdateExpenseMutation } from '../gql/hooks'

export const useUpdateExpense = (
  expense: Expense,
  options?: Parameters<typeof useUpdateExpenseMutation>[0],
) => {
  const [mutation, { loading, error, called }] = useUpdateExpenseMutation(options)

  const { handleSubmit, register, errors, reset } = useFormWithSchema({
    schema: UpdateExpenseInputSchema(),
    defaultValues: {
      ...expense,
      date: new Date(expense.date).toISOString().slice(0, 16) as unknown as Date,
    },
  })

  const onSubmit = useCallback(
    handleSubmit((data) =>
      mutation({
        variables: {
          updateExpenseId: expense.id,
          updateExpenseInput: data,
        },
      }),
    ),
    [mutation, handleSubmit],
  )

  return {
    onSubmit,
    register,
    errors,
    loading,
    error,
    reset,
    called,
  }
}
