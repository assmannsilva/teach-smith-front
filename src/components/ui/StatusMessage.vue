<script setup lang="ts">
import { CheckCircle, XCircle, AlertCircle } from 'lucide-vue-next'
import { computed } from 'vue'

const props = defineProps<{
  message: { type: 'success' | 'error' | 'partial'; text: string } | null
}>()

const iconComponent = computed(() => {
  if (!props.message) return null
  switch (props.message.type) {
    case 'success':
      return CheckCircle
    case 'error':
      return XCircle
    case 'partial':
      return AlertCircle
  }
})
</script>

<template>
  <div
    v-if="message?.text"
    :class="[
      'flex items-start gap-2 p-3 rounded-md text-sm',
      {
        'bg-green-100 text-green-800': message.type === 'success',
        'bg-red-100 text-red-800': message.type === 'error',
        'bg-yellow-100 text-yellow-800': message.type === 'partial',
      }
    ]"
  >
    <component
      :is="iconComponent"
      class="w-5 h-5 mt-0.5 shrink-0"
    />
    <span>{{ message.text }}</span>
  </div>
</template>
