import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: Date; output: string }
}

export type CreateExpenseInput = {
  amount: Scalars['Float']['input']
  date: Scalars['DateTime']['input']
  description?: InputMaybe<Scalars['String']['input']>
  title: Scalars['String']['input']
}

export type Expense = {
  __typename?: 'Expense'
  amount: Scalars['Float']['output']
  date: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  title: Scalars['String']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  createExpense: Expense
  deleteExpense?: Maybe<Expense>
  updateExpense: Expense
}

export type MutationCreateExpenseArgs = {
  createExpenseInput: CreateExpenseInput
}

export type MutationDeleteExpenseArgs = {
  id: Scalars['Int']['input']
}

export type MutationUpdateExpenseArgs = {
  id: Scalars['Int']['input']
  updateExpenseInput: UpdateExpenseInput
}

export type Query = {
  __typename?: 'Query'
  expense?: Maybe<Expense>
  expenses: Array<Expense>
  pagesCount: Scalars['Int']['output']
  total: Scalars['Float']['output']
}

export type QueryExpenseArgs = {
  id: Scalars['Int']['input']
}

export type QueryExpensesArgs = {
  page: Scalars['Int']['input']
}

export type UpdateExpenseInput = {
  amount?: InputMaybe<Scalars['Float']['input']>
  date?: InputMaybe<Scalars['DateTime']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type CreateExpenseMutationVariables = Exact<{
  createExpenseInput: CreateExpenseInput
}>

export type CreateExpenseMutation = {
  __typename?: 'Mutation'
  createExpense: {
    __typename?: 'Expense'
    amount: number
    date: string
    description?: string | null
    id: number
    title: string
  }
}

export type UpdateExpenseMutationVariables = Exact<{
  updateExpenseId: Scalars['Int']['input']
  updateExpenseInput: UpdateExpenseInput
}>

export type UpdateExpenseMutation = {
  __typename?: 'Mutation'
  updateExpense: {
    __typename?: 'Expense'
    amount: number
    date: string
    description?: string | null
    id: number
    title: string
  }
}

export type DeleteExpenseMutationVariables = Exact<{
  removeExpenseId: Scalars['Int']['input']
}>

export type DeleteExpenseMutation = {
  __typename?: 'Mutation'
  deleteExpense?: { __typename?: 'Expense'; id: number } | null
}

export type ExpensesQueryVariables = Exact<{
  page: Scalars['Int']['input']
}>

export type ExpensesQuery = {
  __typename?: 'Query'
  total: number
  pagesCount: number
  expenses: Array<{
    __typename?: 'Expense'
    amount: number
    date: string
    description?: string | null
    id: number
    title: string
  }>
}

export const CreateExpenseDocument = gql`
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
export type CreateExpenseMutationFn = Apollo.MutationFunction<
  CreateExpenseMutation,
  CreateExpenseMutationVariables
>

/**
 * __useCreateExpenseMutation__
 *
 * To run a mutation, you first call `useCreateExpenseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExpenseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExpenseMutation, { data, loading, error }] = useCreateExpenseMutation({
 *   variables: {
 *      createExpenseInput: // value for 'createExpenseInput'
 *   },
 * });
 */
export function useCreateExpenseMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateExpenseMutation, CreateExpenseMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateExpenseMutation, CreateExpenseMutationVariables>(
    CreateExpenseDocument,
    options,
  )
}
export type CreateExpenseMutationHookResult = ReturnType<typeof useCreateExpenseMutation>
export type CreateExpenseMutationResult = Apollo.MutationResult<CreateExpenseMutation>
export type CreateExpenseMutationOptions = Apollo.BaseMutationOptions<
  CreateExpenseMutation,
  CreateExpenseMutationVariables
>
export const UpdateExpenseDocument = gql`
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
export type UpdateExpenseMutationFn = Apollo.MutationFunction<
  UpdateExpenseMutation,
  UpdateExpenseMutationVariables
>

/**
 * __useUpdateExpenseMutation__
 *
 * To run a mutation, you first call `useUpdateExpenseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExpenseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateExpenseMutation, { data, loading, error }] = useUpdateExpenseMutation({
 *   variables: {
 *      updateExpenseId: // value for 'updateExpenseId'
 *      updateExpenseInput: // value for 'updateExpenseInput'
 *   },
 * });
 */
export function useUpdateExpenseMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateExpenseMutation, UpdateExpenseMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateExpenseMutation, UpdateExpenseMutationVariables>(
    UpdateExpenseDocument,
    options,
  )
}
export type UpdateExpenseMutationHookResult = ReturnType<typeof useUpdateExpenseMutation>
export type UpdateExpenseMutationResult = Apollo.MutationResult<UpdateExpenseMutation>
export type UpdateExpenseMutationOptions = Apollo.BaseMutationOptions<
  UpdateExpenseMutation,
  UpdateExpenseMutationVariables
>
export const DeleteExpenseDocument = gql`
  mutation DeleteExpense($removeExpenseId: Int!) {
    deleteExpense(id: $removeExpenseId) {
      id
    }
  }
`
export type DeleteExpenseMutationFn = Apollo.MutationFunction<
  DeleteExpenseMutation,
  DeleteExpenseMutationVariables
>

/**
 * __useDeleteExpenseMutation__
 *
 * To run a mutation, you first call `useDeleteExpenseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteExpenseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteExpenseMutation, { data, loading, error }] = useDeleteExpenseMutation({
 *   variables: {
 *      removeExpenseId: // value for 'removeExpenseId'
 *   },
 * });
 */
export function useDeleteExpenseMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteExpenseMutation, DeleteExpenseMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteExpenseMutation, DeleteExpenseMutationVariables>(
    DeleteExpenseDocument,
    options,
  )
}
export type DeleteExpenseMutationHookResult = ReturnType<typeof useDeleteExpenseMutation>
export type DeleteExpenseMutationResult = Apollo.MutationResult<DeleteExpenseMutation>
export type DeleteExpenseMutationOptions = Apollo.BaseMutationOptions<
  DeleteExpenseMutation,
  DeleteExpenseMutationVariables
>
export const ExpensesDocument = gql`
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

/**
 * __useExpensesQuery__
 *
 * To run a query within a React component, call `useExpensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useExpensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExpensesQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useExpensesQuery(
  baseOptions: Apollo.QueryHookOptions<ExpensesQuery, ExpensesQueryVariables> &
    ({ variables: ExpensesQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ExpensesQuery, ExpensesQueryVariables>(ExpensesDocument, options)
}
export function useExpensesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ExpensesQuery, ExpensesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ExpensesQuery, ExpensesQueryVariables>(ExpensesDocument, options)
}
export function useExpensesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<ExpensesQuery, ExpensesQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<ExpensesQuery, ExpensesQueryVariables>(ExpensesDocument, options)
}
export type ExpensesQueryHookResult = ReturnType<typeof useExpensesQuery>
export type ExpensesLazyQueryHookResult = ReturnType<typeof useExpensesLazyQuery>
export type ExpensesSuspenseQueryHookResult = ReturnType<typeof useExpensesSuspenseQuery>
export type ExpensesQueryResult = Apollo.QueryResult<ExpensesQuery, ExpensesQueryVariables>
