import { Dispatch, SetStateAction } from 'react'

export type LayoutProps = {
  children: React.ReactNode
  activeComponent: string
  setActiveComponent: Dispatch<SetStateAction<string>>
}
