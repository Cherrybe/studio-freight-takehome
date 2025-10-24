<template>
  <div class="flex flex-col space-y-6 w-full" v-bind="$attrs" ref="wrapperRef">
    <!-- Name fields -->
    <div class="flex gap-6 w-full">
      <InputField
        id="first-name"
        label="FIRST NAME*"
        autocomplete
        v-model="formStore.form.firstName"
        placeholder="type here"
        type="text"
        :error="formStore.touched.firstName && formStore.errors.firstName"
        @input="formStore.validateField('firstName')"
        class="flex-1"
      />

      <InputField
        id="last-name"
        label="LAST NAME*"
        autocomplete
        v-model="formStore.form.lastName"
        placeholder="type here"
        type="text"
        :error="formStore.touched.lastName && formStore.errors.lastName"
        @input="formStore.validateField('lastName')"
        class="flex-1"
      />
    </div>

    <!-- Company / Email -->
    <div class="flex gap-6 w-full">
      <InputField
        id="company-name"
        label="COMPANY NAME*"
        autocomplete
        v-model="formStore.form.companyName"
        placeholder="type here"
        type="text"
        :error="formStore.touched.companyName && formStore.errors.companyName"
        @input="formStore.validateField('companyName')"
        class="flex-1"
      />

      <InputField
        id="email"
        label="YOUR EMAIL*"
        autocomplete
        v-model="formStore.form.email"
        placeholder="type here"
        type="email"
        :error="formStore.touched.email && formStore.errors.email"
        @input="formStore.validateField('email')"
        class="flex-1"
      />
    </div>

    <!-- Project type chips -->
    <div class="flex flex-col gap-2">
      <Text
        label="Select all project types that apply*"
        tag="p"
        class="text-text-secondary uppercase font-mono text-xs leading-[125%]"
      />
      <div class="flex flex-wrap gap-2">
        <Chip
          v-for="type in formStore.projectTypes"
          :key="type.value"
          :selected="formStore.form.projectType.includes(type.value)"
          :error="formStore.touched.projectType && formStore.errors.projectType"
          @click="formStore.toggleProjectType(type.value)"
        >
          {{ type.label }}
        </Chip>
      </div>
    </div>

    <!-- Textarea -->
    <TextareaField
      id="project-description"
      label="PROJECT DESCRIPTION"
      autocomplete
      v-model="formStore.form.projectDescription"
      placeholder="Type here..."
      :rows="4"
      :error="formStore.touched.projectDescription && formStore.errors.projectDescription"
      @input="formStore.validateField('projectDescription')"
    />

    <!-- Budget / Timeline -->
    <div class="flex gap-6 w-full">
      <SelectField
        id="budget-expectation"
        label="BUDGET EXPECTATION*"
        v-model="formStore.form.budget"
        autocomplete
        :options="[
          { label: 'SELECT', value: '' },
          { label: 'LESS THAN 40K', value: 'less-40k' },
          { label: 'MORE THAN 40K', value: 'more-40k' },
          { label: 'MORE THAN 100K', value: 'more-100k' },
          { label: 'MORE THAN 200K', value: 'more-200k' },
        ]"
        :error="formStore.touched.budget && formStore.errors.budget"
        @change="formStore.validateField('budget')"
        class="flex-1"
      />

      <InputField
        id="timeline-expectation"
        label="TIMELINE EXPECTATION*"
        autocomplete
        v-model="formStore.form.timeline"
        placeholder="type here"
        type="text"
        :error="formStore.touched.timeline && formStore.errors.timeline"
        @input="formStore.validateField('timeline')"
        class="flex-1"
      />
    </div>

    <!-- Optional fields -->
    <div class="flex gap-6 w-full">
      <InputField
        id="how-find-us"
        label="HOW YOU FIND US?"
        autocomplete
        v-model="formStore.form.findUs"
        placeholder="type here"
        type="text"
        :error="formStore.touched.findUs && formStore.errors.findUs"
        @input="formStore.validateField('findUs')"
        class="flex-1"
      />

      <InputField
        id="favorite-movie"
        label="FAVORITE MOVIE OR ALBUM"
        autocomplete
        v-model="formStore.form.favorite"
        placeholder="type here"
        type="text"
        :error="formStore.touched.favorite && formStore.errors.favorite"
        @input="formStore.validateField('favorite')"
        class="flex-1"
      />
    </div>

    <Button
      variant="outline"
      label="LFG"
      :disabled="!formStore.canSubmit"
       @click="handleSubmit"
      className="w-full h-12"
    />
  </div>
</template>

<script setup lang="ts">
import InputField from '../../molecules/form/input/InputField.vue'
import SelectField from '../../molecules/form/selectField/SelectField.vue'
import TextareaField from '../../molecules/form/textarea/TextareaField.vue'
import Chip from '../../atoms/chip/ChipComponent.vue'
import Button from '../../atoms/button/ButtonComponent.vue'
import Text from '../../atoms/text/TextComponent.vue'
import { useFormStore } from '../../../stores/formStore'

const emit = defineEmits(['submitted'])
const formStore = useFormStore()
const handleSubmit = () => {
  formStore.validateForm()

  if (formStore.canSubmit) {
    emit('submitted')
    formStore.resetForm()  
  }
}
</script>
