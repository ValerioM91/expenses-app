import { createContext, useContext } from 'react'

type ModalContextType = {
  open: boolean
  setOpen: (open: boolean) => void
}

export const ModalContext = createContext<ModalContextType>({
  open: false,
  setOpen: () => {},
})

export const useModalContext = () => useContext(ModalContext)
