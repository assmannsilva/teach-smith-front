<template>
  <p
    v-if="message"
    role="alert"
    class="flex items-center gap-1 text-sm text-red-600"
  >
    <svg
      class="w-4 h-4 flex-shrink-0 text-red-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 9v2m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z" />
    </svg>
    {{ message }}
  </p>
</template>

<script setup lang="ts">
defineProps({
  message: {
    type: String,
    required: false,
    default: ''
  }
});
</script>
