<script setup lang="ts">
import UserRegistrationCard from '@/components/UserRegistrationCard.vue';
import GoogleLoginButton from '@/components/GoogleLoginButton.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Error from '@/components/ui/Error.vue';

const route = useRoute();
const urlErrorMessage = computed(() => {
  const error = route.query.error;
  return typeof error === 'string' ? error : undefined;
});

</script>

<template>
  <div class="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
    <div class="flex w-full max-w-md flex-col gap-6">
        <UserRegistrationCard />
        <div class="mx-auto">
          <GoogleLoginButton type="register" />
        </div>
        <div class="flex flex-col items-center">
          <Error :message="urlErrorMessage ?? ''" />
        </div>
    </div>
  </div>
</template>