
export interface InputProps<T> {
  title?: string
  value: T
  disabled?: boolean
  required?: boolean
  devider?: boolean
  onChange?: (v: T) => void
}