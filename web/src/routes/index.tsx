import { createFileRoute } from '@tanstack/react-router'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { ExpensesList } from '../components/expenses/expenses-list'
import { AddExpenseModal } from '../components/expenses/add-expense-modal'
import { type ExpensesQuery as TExpensesQuery } from '../gql/hooks'
import { apolloClient } from '../utils/apollo-client'
import { ExpensesQuery } from '../graphql/queries'
import { z } from 'zod'
import { Pagination } from '../components/ui/pagination'

export const Route = createFileRoute('/')({
  component: App,
  validateSearch: z.object({
    page: z.number().optional(),
  }),
  loaderDeps: ({ search: { page } }) => ({ page }),

  loader: async ({ deps: { page } }) => {
    try {
      return await apolloClient.query({
        query: ExpensesQuery,
        variables: { page: page || 1 },
        fetchPolicy: 'no-cache',
      })
    } catch (error) {
      console.error(error)
      return { data: undefined }
    }
  },
})

function App() {
  const { data } = Route.useLoaderData() as { data: TExpensesQuery | undefined }

  return (
    <Box bgColor="gray.900" p={6} minH="100vh">
      <header>
        <Heading fontWeight={600} as="h1" size="5xl" textAlign="center" textTransform="uppercase">
          Expenses App
        </Heading>
      </header>
      <Box as="main" mt={6} mx="auto" maxW="breakpoint-2xl">
        <Flex justifyContent="space-between" mt={6}>
          {data?.total && <Text fontSize="2xl">Total: £{data.total}</Text>}
          <AddExpenseModal />
        </Flex>
        <Box mt={6}>
          <ExpensesList expenses={data?.expenses} />
          <Pagination totalPages={data?.pagesCount ?? 1} />
        </Box>
      </Box>
    </Box>
  )
}
