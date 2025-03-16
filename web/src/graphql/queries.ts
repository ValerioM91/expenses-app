import { gql } from '@apollo/client'

export const ExpensesQuery = gql`
  query Expenses($page: Int!) {
    total
    pagesCount
    expenses(page: $page) {
      amount
      date
      description
      id
      title
    }
  }
`
