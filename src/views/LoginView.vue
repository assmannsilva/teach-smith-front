<script setup lang="ts">
import GoogleLoginButton from '@/components/GoogleLoginButton.vue';
import LoginCard from '@/components/LoginCard.vue'
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

      <LoginCard />
      <div class="mx-auto">
        <GoogleLoginButton />
      </div>
      <div class="flex flex-col items-center">
        <Error :message="urlErrorMessage ?? ''" />
      </div>
      <div class="flex justify-center mt-4 text-sm text-muted-foreground">
        <span>Don't have an account?</span>
        <RouterLink to="/create-organization" class="ml-2 text-primary hover:underline hover:text-primary/80 transition-colors">
         Click Here to Register your Organization
        </RouterLink>
      </div>
    </div>
  </div>
</template>