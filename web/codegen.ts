import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql/',
  documents: ['src/**/*.{tsx,ts}'],
  generates: {
    './src/gql/': {
      preset: 'client',
      config: {
        useTypeImports: true,
        scalars: {
          DateTime: { input: 'Date', output: 'string' },
        },
      },
    },
    './src/gql/hooks.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        scalars: {
          DateTime: { input: 'Date', output: 'string' },
        },
        withHooks: true,
      },
    },
    './src/gql/validation.ts': {
      plugins: ['typescript-validation-schema'],
      config: {
        useTypeImports: true,
        importFrom: './graphql',
        schema: 'zod',
        scalarSchemas: {
          DateTime: 'z.date()',
        },
      },
    },
  },
}

export default config
