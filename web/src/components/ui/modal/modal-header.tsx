import { Button, Flex, Heading } from '@chakra-ui/react'
import { useModalContext } from './modal-context'

export const ModalHeader = ({ heading }: { heading: string }) => {
  const { setOpen } = useModalContext()

  return (
    <Flex alignItems="center" justifyContent="space-between" color="white" mb={7}>
      <Heading as="h3" fontSize="2xl" fontWeight={600}>
        {heading}
      </Heading>
      <Button
        variant="ghost"
        fontSize="3xl"
        onClick={() => setOpen(false)}
        aria-label="Close modal"
      >
        <span>X</span>
      </Button>
    </Flex>
  )
}
ModalHeader.displayName = 'ModalHeader'
