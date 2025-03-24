import { cloneElement, isValidElement } from 'react'
import { useModalContext } from './modal-context'

export const ModalTrigger = ({ children, ...rest }: React.ComponentPropsWithoutRef<'button'>) => {
  const { setOpen } = useModalContext()
  if (!isValidElement(children)) {
    return null
  }
  return cloneElement(children, { onClick: () => setOpen(true), ...rest })
}
ModalTrigger.displayName = 'ModalTrigger'
