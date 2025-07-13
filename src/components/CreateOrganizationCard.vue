<script setup lang="ts">

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Card from '@/components/ui/card/Card.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import CardTitle from '@/components/ui/card/CardTitle.vue'
import CardContent from '@/components/ui/card/CardContent.vue'
import { Loader2 } from 'lucide-vue-next'

import Label from './ui/label/Label.vue'
import ErrorMessage from './ui/Error.vue'
import { useCreateOrganization } from '@/composables/useCreateOrganization'

function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  organizationFile.value = target.files?.[0] || null;
}

const { organizationName, organizationFile, errorMessage, isLoading, createOrganization } = useCreateOrganization()
</script>

<template>
    <Card class="rounded-xl">
        <CardHeader class="px-10 pb-0 pt-8 text-center">
          <CardTitle class="text-xl">Register Your Organization</CardTitle>
        </CardHeader>
        <CardContent class="px-10 py-8">
          <form @submit.prevent="createOrganization" class="flex flex-col gap-6">
            <div class="grid gap-2">
              <Label for="organizationName">Organization Name</Label>
              <Input
                  id="organizationName"
                  type="text"
                  required
                  :tabindex="1"
                  v-model="organizationName"
              />
            </div>
            <div class="grid gap-2">
                <div class="flex items-center justify-between">
                  <Label for="organizationFile">Logo</Label>
                </div>
                <Input
                    id="organizationFile"
                    type="file"
                    required
                    :tabindex="2"
                    accept="image/*"
                    @change="onFileChange"
                />
            </div>
            <ErrorMessage :message="errorMessage ?? ''" />

            <Button type="submit" :disabled="isLoading">
              Continue with Registration
              <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />
            </Button>
        </form>
        </CardContent>
      </Card>
</template>
