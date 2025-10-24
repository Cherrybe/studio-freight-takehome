import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { FormFields, FormErrors } from './store.types'

export const useFormStore = defineStore('form', () => {
  const initialForm: FormFields = {
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    projectType: [],
    projectDescription: '',
    budget: '',
    timeline: '',
    findUs: '',
    favorite: '',
  }

   const form = ref<FormFields>({ ...initialForm })

  const errors = ref<FormErrors>({
    firstName: false,
    lastName: false,
    companyName: false,
    email: false,
    projectType: false,
    projectDescription: false,
    budget: false,
    timeline: false,
    findUs: false,
    favorite: false,
  })

  const touched = ref<Record<keyof FormFields, boolean>>({
    firstName: false,
    lastName: false,
    companyName: false,
    email: false,
    projectType: false,
    projectDescription: false,
    budget: false,
    timeline: false,
    findUs: false,
    favorite: false,
  })

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

  const projectTypes = ref([
    { label: 'Brand', value: 'brand' },
    { label: 'Website', value: 'website' },
    { label: 'Art Direction', value: 'art-direction' },
    { label: 'Campaign', value: 'campaign' },
    { label: 'Other', value: 'other' },
  ])

  const MIN_LENGTH = 2

  const requiredFields: (keyof FormFields)[] = [
  'firstName',
  'lastName',
  'companyName',
  'email',
  'projectType',
  'budget',
  'timeline',
]

  const validateField = (field: keyof FormFields, onlyIfTouched = false) => {
  if (onlyIfTouched && !touched.value[field]) return

  // mark as touched
  touched.value[field] = true

  switch (field) {
    case 'firstName':
    case 'lastName':
    case 'companyName':
    case 'timeline':
      errors.value[field] = form.value[field].trim().length < MIN_LENGTH
      break

    case 'email': {
      const value = form.value.email.trim()
      errors.value.email = !value || !emailRegex.test(value)
      break
    }

    case 'projectType':
      errors.value.projectType = form.value.projectType.length === 0
      break

    case 'budget':
      errors.value.budget = !form.value.budget
      break

    case 'findUs':
    case 'favorite':
    case 'projectDescription':
      if (touched.value[field]) {
        errors.value[field] = form.value[field].trim().length < MIN_LENGTH
      }
      break
  }
}

  const toggleProjectType = (type: string) => {
    const index = form.value.projectType.indexOf(type)
    if (index > -1) form.value.projectType.splice(index, 1)
    else form.value.projectType.push(type)
    touched.value.projectType = true
    validateField('projectType')
  }

  const validateForm = () => {
  requiredFields.forEach((key) => validateField(key))
}

  const canSubmit = computed(() => {
    const requiredFields: (keyof FormFields)[] = [
      'firstName',
      'lastName',
      'companyName',
      'email',
      'projectType',
      'budget',
      'timeline',
    ]

    return requiredFields.every((f) => !errors.value[f] && form.value[f].toString().trim())
  })

  const hasErrors = computed(() => Object.values(errors.value).some(Boolean))

  const resetForm = () => {
    form.value = { ...initialForm }
    Object.keys(errors.value).forEach(key => (errors.value[key as keyof FormErrors] = false))
    Object.keys(touched.value).forEach(key => (touched.value[key as keyof FormFields] = false))
  }

  return {
    form,
    errors,
    touched,
    projectTypes,
    hasErrors,
    canSubmit,
    toggleProjectType,
    validateField,
    validateForm,
    resetForm
  }
})
