import { createPortal } from 'react-dom'
import { Box, Flex, type FlexProps } from '@chakra-ui/react'
import { useModalContext } from './modal-context'
import FocusLock from 'react-focus-lock'
import type { PropsWithChildren } from 'react'

export const ModalContent = ({ children, ...contentProps }: PropsWithChildren<FlexProps>) => {
  const { open, setOpen } = useModalContext()
  if (!open) return null

  return createPortal(
    <FocusLock>
      <Box
        position="fixed"
        inset={0}
        zIndex={40}
        bgColor="blackAlpha.500"
        aria-hidden="true"
        tabIndex={-1}
      ></Box>
      <Flex
        position="fixed"
        inset={0}
        zIndex={50}
        bgColor="blackAlpha.500"
        alignItems="center"
        justifyContent="center"
        overflowY="auto"
        overflowX="hidden"
        outline="none"
        data-testid="modal-overlay"
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false)
        }}
      >
        <Flex
          role="dialog"
          tabIndex={-1}
          aria-modal="true"
          rounded="4xl"
          position="relative"
          mx={4}
          maxH="full"
          w="full"
          maxW="xl"
          flexDir="column"
          border={0}
          bgColor="gray.900"
          p={8}
          shadow="lg"
          outline="none"
          lg={{ p: 12 }}
          {...contentProps}
        >
          {children}
        </Flex>
      </Flex>
    </FocusLock>,
    document.getElementById('modal') as HTMLElement,
  )
}
ModalContent.displayName = 'ModalContent'
