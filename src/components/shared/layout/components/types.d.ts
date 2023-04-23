import { Dispatch, SetStateAction } from 'react'

export type ContentLayoutProps = {
  children: React.ReactNode
  activeComponent: string
  setActiveComponent: Dispatch<SetStateAction<string>>
}

export type NavigationItemProps = {
  date: string
  title: string
  onClick: Dispatch<SetStateAction<string>>
  activeComponent: string
}
