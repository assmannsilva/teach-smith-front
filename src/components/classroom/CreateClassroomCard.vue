<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Card from '@/components/ui/card/Card.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import CardTitle from '@/components/ui/card/CardTitle.vue'
import CardContent from '@/components/ui/card/CardContent.vue'
import { Loader2 } from 'lucide-vue-next'

import Label from '@/components/ui/label/Label.vue'
import ErrorMessage from '@/components/ui/Error.vue'
import { useCreateClassroom } from '@/composables/useCreateClassroom'
import StatusMessage from '../ui/StatusMessage.vue'

const {
  grade,
  educationStage,
  section,
  year,
  errors,
  isLoading,
  statusMessage,
  resetForm,
  createClassroom
} = useCreateClassroom()

async function handleClick() {
  const success = await createClassroom()
  if(success) resetForm()
}
</script>

<template>
  <Card class="rounded-xl">
    <CardHeader class="px-10 pb-0 pt-8 text-center">
      <CardTitle class="text-xl">Register Classroom</CardTitle>
    </CardHeader>
    <CardContent class="px-10 py-8">
      <form class="flex flex-col gap-6" @submit.prevent="handleClick">
        <div class="grid gap-2">
          <Label for="grade">Grade</Label>
          <Input id="grade" v-model="grade" :tabindex="1" />
          <ErrorMessage :message="errors.grade" />
        </div>

        <div class="grid gap-2">
          <Label for="educationStage">Education Stage</Label>
          <Input id="educationStage" v-model="educationStage" :tabindex="2" />
          <ErrorMessage :message="errors.educationStage" />
        </div>

        <div class="grid gap-2">
          <Label for="section">Section</Label>
          <Input id="section" v-model="section" :tabindex="3" />
          <ErrorMessage :message="errors.section" />
        </div>

        <div class="grid gap-2">
          <Label for="year">Year</Label>
          <Input id="year" v-model="year" type="number" :tabindex="4" />
          <ErrorMessage :message="errors.year" />
        </div>

        <StatusMessage :message="statusMessage" />

        <Button type="submit" :disabled="isLoading">
          Register Classroom
          <Loader2 v-if="isLoading" class="w-4 h-4 ml-2 animate-spin" />
        </Button>
      </form>
    </CardContent>
  </Card>
</template>
