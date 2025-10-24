export interface InputFieldProps {
  id?: string
  label?: string
  modelValue?: string
  placeholder?: string
  type?: string
  customClass?: string
}

interface SelectOption {
  label: string
  value: string | number
}

export interface SelectFieldProps {
  id?: string
  label?: string
  options: SelectOption[]
  modelValue?: string | number
} 

export interface TextareaFieldProps {
  id?: string
  label?: string
  modelValue?: string
  placeholder?: string
  rows?: number
}
