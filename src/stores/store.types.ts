export interface FormFields {
  firstName: string
  lastName: string
  companyName: string
  email: string
  projectType: string[]
  projectDescription: string
  budget: string
  timeline: string
  findUs: string
  favorite: string
}

export interface FormErrors {
  firstName: boolean
  lastName: boolean
  companyName: boolean
  email: boolean
  projectType: boolean
  projectDescription: boolean
  budget: boolean
  timeline: boolean
  findUs: boolean
  favorite: boolean
}