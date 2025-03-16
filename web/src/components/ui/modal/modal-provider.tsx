import { useState } from 'react'
import { ModalContext } from './modal-context'

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)

  return <ModalContext.Provider value={{ open, setOpen }}>{children}</ModalContext.Provider>
}
ModalProvider.displayName = 'ModalProvider'
