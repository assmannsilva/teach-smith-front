<script setup lang="ts">
import { ref } from 'vue';
import Card from '@/components/ui/card/Card.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import CardTitle from '@/components/ui/card/CardTitle.vue'
import CardContent from '@/components/ui/card/CardContent.vue'
import { Loader2 } from 'lucide-vue-next';
import Button from '../ui/button/Button.vue';
import Input from '../ui/input/Input.vue';
import Label from '../ui/label/Label.vue';
import { useInviteStudent } from '@/composables/useInviteStudent';

import ErrorMessage from '../ui/Error.vue'
import StatusMessage from '../ui/StatusMessage.vue';

const isLoading = ref(false)
const inviteSuccess = ref(false)

const { errors, statusMessage, firstName, registrationCode, surname, email, section, grade, admissionDate, inviteStudent  } = useInviteStudent()

async function handleClick() {
  isLoading.value = true
  inviteSuccess.value = await inviteStudent()
  isLoading.value = false
}

</script>
<template>
  <Card class="rounded-xl">
    <CardHeader class="px-10 pb-0 pt-8 text-center">
      <CardTitle class="text-xl">Invite Single Student</CardTitle>
    </CardHeader>
    <CardContent class="px-10 py-8">
      <form class="flex flex-col gap-6" @submit.prevent="handleClick">
        <div class="grid gap-2">
          <Label for="firstName">First Name</Label>
          <Input id="firstName" v-model="firstName" :tabindex="1" />
          <ErrorMessage :message="errors.firstName" />
        </div>

        <div class="grid gap-2">
          <Label for="surname">Surname</Label>
          <Input id="surname" v-model="surname" :tabindex="2" />
          <ErrorMessage :message="errors.surname" />
        </div>

        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" v-model="email" type="email" :tabindex="3" />
          <ErrorMessage :message="errors.email" />
        </div>

        <div class="grid gap-2">
          <Label for="grade">Grade</Label>
          <Input id="grade" v-model="grade" :tabindex="4" />
          <ErrorMessage :message="errors.grade" />
        </div>

        <div class="grid gap-2">
          <Label for="section">Section</Label>
          <Input id="section" v-model="section" :tabindex="5" />
          <ErrorMessage :message="errors.section" />
        </div>

        <div class="grid gap-2">
          <Label for="admissionDate">Admission Date</Label>
          <Input id="admissionDate" v-model="admissionDate" type="date" :tabindex="6" />
          <ErrorMessage :message="errors.admissionDate" />
        </div>

        <div class="grid gap-2">
          <Label for="registrationCode">Registration Code</Label>
          <Input id="registrationCode" v-model="registrationCode" :tabindex="7" />
          <ErrorMessage :message="errors.registrationCode" />
        </div>

        <StatusMessage :message="statusMessage" />

        <Button type="submit" :disabled="isLoading">
          Invite Student
          <Loader2 v-if="isLoading" class="w-4 h-4 ml-2 animate-spin" />
        </Button>
      </form>
    </CardContent>
  </Card>
</template>