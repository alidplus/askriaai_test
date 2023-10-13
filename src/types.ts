
export interface InputProps<T> {
  title?: string
  value: T
  disabled?: boolean
  required?: boolean
  devider?: boolean
  onChange?: (v: T) => void
}


export interface IMemeber {
  name: string
  nationality: string
  education: string
}