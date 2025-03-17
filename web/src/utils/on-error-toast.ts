import type { ApolloError } from '@apollo/client'
import { toaster } from '../components/ui/toaster'
import type { GraphQLFormattedErrorExtensions } from 'graphql'

export const onErrorToast = (error: ApolloError) => {
  let message = error.message

  if (error.cause?.extensions) {
    const extensions: GraphQLFormattedErrorExtensions =
      error.cause.extensions instanceof Array ? error.cause.extensions[0] : error.cause.extensions
    const newMessage = (extensions.originalError as { message?: string[] }).message?.join('. ')
    if (newMessage) {
      message = newMessage
    }
  }

  return toaster.error({
    title: 'There was an error',
    description: message,
  })
}
