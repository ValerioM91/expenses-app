# Expenses App

This is a simple expenses app that allows you to add, edit, and delete expenses.

## Installation

0. If using nvm, run `nvm use` to use the correct node version (22).
1. Run `docker-compose up -d` to start a database container.
2. In api, Rename the `.env.example` file to `.env`.
3. Run the following commands. It will install the dependencies for both the apps, create the database schema, seed the database, and start the API and Web app concurrently.

```bash
npm install;
cd api; npm install; npx prisma migrate dev; npx prisma db seed; cd ..;
cd web; npm install; cd ..;
npm run dev;
```

3. Open your browser and go to `http://localhost:3001`
4. Open your the GraphQL Playground and go to `http://localhost:3000/graphql`

## API

The GraphQL API is built with [NestJS](https://nestjs.com/) and uses [Prisma](https://www.prisma.io/) as an ORM. The database is a MySQL database.

The API has the following resolvers:

- `expenses`: To get all expenses
- `expense`: To get a single expense
- `createExpense`: To create an expense
- `updateExpense`: To update an expense
- `deleteExpense`: To delete an expense

### API Code structure

> | Name                                  | Description                                             |
> | ------------------------------------- | ------------------------------------------------------- |
> | **prisma**                            | This is where the db models and migrations are located. |
> | **src**                               | This is where the main code is located.                 |
> | **src/expenses**                      | This is where the expenses module is located.           |
> | **src/expenses/dto**                  | This is where the DTOs are located.                     |
> | **src/expenses/expenses.grapqhl**     | File with the GraphQL schema for the expenses module.   |
> | **src/expenses/expenses.module.ts**   | The module for the expenses module.                     |
> | **src/expenses/expenses.resolver.ts** | The resolvers for the expenses module.                  |
> | **src/expenses/expenses.service.ts**  | The service for the expenses module.                    |
> | **src/app.module.ts**                 | The main module of the app.                             |
> | **src/main.ts**                       | The entry point of the app.                             |

### Technologies

Here is a list of the technologies I added to the project:

- [TypeScript](https://www.typescriptlang.org/) as the main language.
- [NestJS](https://nestjs.com/) as the main framework.
- [Prisma](https://www.prisma.io/) as the ORM.
- [GraphQL](https://graphql.org/) as the query language.
- [Jest](https://jestjs.io/) as the testing framework.

## Web

The web app is a single page app with only an index route that shows a list of expenses. You can add, edit, and delete expenses.

The web app is built:

- [Tanstack Router](https://tanstack.com/router)
- [Chakra UI](https://chakra-ui.com/) as the component library.
- [Apollo Client](https://www.apollographql.com/docs/react/) for server state management and fetching data from the API
- [graphql-codegen](https://www.graphql-code-generator.com/) to generate types for the GraphQL queries and mutations, zod schemas, and react hooks to fetch and mutate the data
- [Zod](https://zod.dev/) and [React Hook Form](https://react-hook-form.com/) for form validation
- [Vitest](hthttps://vitest.dev/) as the testing framework.

I've implemented the following features:

- List all expenses with pagination
  - Page parameter is a query
  - Expenses are loaded before the component is mounted - See `loader` in `routes/index.tsx`
- Add an expense
- Edit an expense
- Delete an expense
- Show a toast notification when an expense is added, edited, deleted or when there is an error

## Web Code structure

> | Name                         | Description                                                                                    |
> | ---------------------------- | ---------------------------------------------------------------------------------------------- |
> | **src**                      | This is where the main code is located.                                                        |
> | **src/components**           | This is where the components are located.                                                      |
> | **src/components/expenses/** | This is where the expenses components are located.                                             |
> | **src/components/ui/**       | This is where the reusable UI components are located.                                          |
> | **src/gql**                  | Folder with the generated types, hooks, and zod schemas for the GraphQL queries and mutations. |
> | **src/graphql**              | This is where the GraphQL queries and mutations are located.                                   |
> | **src/hooks**                | This is where the hooks are located.                                                           |
> | **src/routes**               | This is where the routes are located. Tanstack query since folder for file-based routing.      |
> | **src/testing**              | Utils for testing                                                                              |
> | **src/utils**                | This is where the utility functions are located.                                               |
