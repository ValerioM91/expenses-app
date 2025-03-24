import { Button, Field, Fieldset, Input } from '@chakra-ui/react'
import type { useCreateExpense } from '../../hooks/use-create-expense'
import type { useUpdateExpense } from '../../hooks/use-update-expense'

export const ExpenseForm = ({
  expenseHook,
}: {
  expenseHook: ReturnType<typeof useCreateExpense> | ReturnType<typeof useUpdateExpense>
}) => {
  const { onSubmit, register, errors, loading } = expenseHook

  return (
    <form onSubmit={onSubmit} role="form">
      <Fieldset.Root size="lg" maxW="md">
        <Fieldset.Content>
          <Field.Root invalid={!!errors.title}>
            <Field.Label>Title</Field.Label>
            <Input variant="outline" required {...register('title')} />
            <Field.ErrorText>{errors.title?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.description}>
            <Field.Label>Description</Field.Label>
            <Input {...register('description')} />
            {errors.description && <Field.ErrorText>{errors.description.message}</Field.ErrorText>}
          </Field.Root>

          <Field.Root invalid={!!errors.amount}>
            <Field.Label>Amount</Field.Label>
            <Input
              type="number"
              step="0.01"
              {...register('amount', {
                valueAsNumber: true,
              })}
            />
            {errors.amount && <Field.ErrorText>{errors.amount.message}</Field.ErrorText>}
          </Field.Root>

          <Field.Root invalid={!!errors.date}>
            <Field.Label>Date</Field.Label>
            <Input
              type="datetime-local"
              {...register('date', {
                valueAsDate: true,
                setValueAs(value) {
                  return new Date(value).toISOString().slice(0, 16)
                },
              })}
            />
            {errors.date && <Field.ErrorText>{errors.date.message}</Field.ErrorText>}
          </Field.Root>
        </Fieldset.Content>

        <Button type="submit" alignSelf="flex-start" disabled={loading}>
          Submit
        </Button>
      </Fieldset.Root>
    </form>
  )
}
