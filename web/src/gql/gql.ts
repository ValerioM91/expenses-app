/* eslint-disable */
import * as types from './graphql'
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  '\n  mutation CreateExpense($createExpenseInput: CreateExpenseInput!) {\n    createExpense(createExpenseInput: $createExpenseInput) {\n      amount\n      date\n      description\n      id\n      title\n    }\n  }\n': typeof types.CreateExpenseDocument
  '\n  mutation UpdateExpense($updateExpenseId: Int!, $updateExpenseInput: UpdateExpenseInput!) {\n    updateExpense(id: $updateExpenseId, updateExpenseInput: $updateExpenseInput) {\n      amount\n      date\n      description\n      id\n      title\n    }\n  }\n': typeof types.UpdateExpenseDocument
  '\n  mutation DeleteExpense($removeExpenseId: Int!) {\n    deleteExpense(id: $removeExpenseId) {\n      id\n    }\n  }\n': typeof types.DeleteExpenseDocument
  '\n  query Expenses($page: Int!) {\n    total\n    pagesCount\n    expenses(page: $page) {\n      amount\n      date\n      description\n      id\n      title\n    }\n  }\n': typeof types.ExpensesDocument
}
const documents: Documents = {
  '\n  mutation CreateExpense($createExpenseInput: CreateExpenseInput!) {\n    createExpense(createExpenseInput: $createExpenseInput) {\n      amount\n      date\n      description\n      id\n      title\n    }\n  }\n':
    types.CreateExpenseDocument,
  '\n  mutation UpdateExpense($updateExpenseId: Int!, $updateExpenseInput: UpdateExpenseInput!) {\n    updateExpense(id: $updateExpenseId, updateExpenseInput: $updateExpenseInput) {\n      amount\n      date\n      description\n      id\n      title\n    }\n  }\n':
    types.UpdateExpenseDocument,
  '\n  mutation DeleteExpense($removeExpenseId: Int!) {\n    deleteExpense(id: $removeExpenseId) {\n      id\n    }\n  }\n':
    types.DeleteExpenseDocument,
  '\n  query Expenses($page: Int!) {\n    total\n    pagesCount\n    expenses(page: $page) {\n      amount\n      date\n      description\n      id\n      title\n    }\n  }\n':
    types.ExpensesDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateExpense($createExpenseInput: CreateExpenseInput!) {\n    createExpense(createExpenseInput: $createExpenseInput) {\n      amount\n      date\n      description\n      id\n      title\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateExpense($createExpenseInput: CreateExpenseInput!) {\n    createExpense(createExpenseInput: $createExpenseInput) {\n      amount\n      date\n      description\n      id\n      title\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateExpense($updateExpenseId: Int!, $updateExpenseInput: UpdateExpenseInput!) {\n    updateExpense(id: $updateExpenseId, updateExpenseInput: $updateExpenseInput) {\n      amount\n      date\n      description\n      id\n      title\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateExpense($updateExpenseId: Int!, $updateExpenseInput: UpdateExpenseInput!) {\n    updateExpense(id: $updateExpenseId, updateExpenseInput: $updateExpenseInput) {\n      amount\n      date\n      description\n      id\n      title\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation DeleteExpense($removeExpenseId: Int!) {\n    deleteExpense(id: $removeExpenseId) {\n      id\n    }\n  }\n',
): (typeof documents)['\n  mutation DeleteExpense($removeExpenseId: Int!) {\n    deleteExpense(id: $removeExpenseId) {\n      id\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Expenses($page: Int!) {\n    total\n    pagesCount\n    expenses(page: $page) {\n      amount\n      date\n      description\n      id\n      title\n    }\n  }\n',
): (typeof documents)['\n  query Expenses($page: Int!) {\n    total\n    pagesCount\n    expenses(page: $page) {\n      amount\n      date\n      description\n      id\n      title\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
