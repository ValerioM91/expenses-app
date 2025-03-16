import { useCallback } from 'react'
import { useCreateExpenseMutation } from '../gql/hooks'
import { CreateExpenseInputSchema } from '../gql/validation'
import { useFormWithSchema } from '../utils/use-form-with-schema'

export const useCreateExpense = (options?: Parameters<typeof useCreateExpenseMutation>[0]) => {
  const [mutation, { loading, error, called }] = useCreateExpenseMutation(options)

  const { handleSubmit, register, errors, reset } = useFormWithSchema({
    schema: CreateExpenseInputSchema(),
    defaultValues: {
      amount: 0,
      date: new Date().toISOString().slice(0, 16) as unknown as Date,
    },
  })

  const onSubmit = useCallback(
    handleSubmit((data) =>
      mutation({
        variables: {
          createExpenseInput: data,
        },
      })
    ),
    [mutation, handleSubmit]
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
