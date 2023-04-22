export type ScrollbarDataItem = {
  item: { place: string; voucher: string; prize: string }
}
export type ScrollbarProps = {
  withHeading?: boolean
  listData?: item[]
  styles?: string
  scrollbarListStyles?: string
}
