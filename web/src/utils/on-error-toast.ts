import type { ApolloError } from '@apollo/client'
import { toaster } from '../components/ui/toaster'

export const onErrorToast = (error: ApolloError) => {
  return toaster.error({
    title: 'There was an error',
    description: error.message,
  })
}
