<script setup lang="ts">
import Card from '@/components/ui/card/Card.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import CardTitle from '@/components/ui/card/CardTitle.vue'
import CardContent from '@/components/ui/card/CardContent.vue'
import { Loader2 } from 'lucide-vue-next';
import Button from '../ui/button/Button.vue';
import Input from '../ui/input/Input.vue';
import Label from '../ui/label/Label.vue';
import ErrorMessage from '../ui/Error.vue'
import { useInviteTeacher } from '@/composables/useInviteTeacher';
import { ref } from 'vue';
import StatusMessage from '../ui/StatusMessage.vue';

const {
  firstName,
  surname,
  email,
  cpf,
  degree,
  hireDate,
  errors,
  isLoading,
  statusMessage,
  inviteTeacher,
  resetForm,
}  = useInviteTeacher()

async function handleClick() {
  const success = await inviteTeacher()
  if(success) resetForm()
}

</script>
<template>
  <Card class="rounded-xl">
    <CardHeader class="px-10 pb-0 pt-8 text-center">
      <CardTitle class="text-xl">Invite Single Teacher</CardTitle>
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
          <Label for="cpf">CPF</Label>
          <Input id="cpf" v-model="cpf" :tabindex="4" />
          <ErrorMessage :message="errors.cpf" />
        </div>

        <div class="grid gap-2">
          <Label for="degree">Degree</Label>
          <Input id="degree" v-model="degree" :tabindex="5" />
          <ErrorMessage :message="errors.degree" />
        </div>

        <div class="grid gap-2">
          <Label for="hireDate">Hire Date</Label>
          <Input id="hireDate" v-model="hireDate" type="date" :tabindex="6" />
          <ErrorMessage :message="errors.hireDate" />
        </div>

        <StatusMessage :message="statusMessage" />

        <Button type="submit" :disabled="isLoading">
          Invite Teacher
          <Loader2 v-if="isLoading" class="w-4 h-4 ml-2 animate-spin" />
        </Button>
      </form>
    </CardContent>
  </Card>
</template>