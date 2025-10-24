export interface InputFieldProps {
  id?: string
  label?: string
  modelValue?: string
  placeholder?: string
  type?: string
  error?: boolean
  success?: string
}

interface SelectOption {
  label: string
  value: string
}

export interface SelectFieldProps {
  id?: string
  label?: string
  options: SelectOption[]
  modelValue?: string
  error?: boolean
  className?: string
} 

export interface TextareaFieldProps {
  id?: string
  label?: string
  modelValue?: string
  placeholder?: string
  rows?: number
}
