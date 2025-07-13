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
import { useRegister } from '@/composables/useRegister'

const {submitRegister, firstName, surname, email, password, passwordConfirmation, errorMessage, errorsObject, isLoading} = useRegister()
</script>

<template>
    <Card class="rounded-xl">
        <CardHeader class="px-10 pb-0 pt-8 text-center">
          <CardTitle class="text-xl">Register Your Organization</CardTitle>
        </CardHeader>
        <CardContent class="px-10 py-8">
          <form @submit.prevent="submitRegister" class="flex flex-col gap-6">
            <div class="grid gap-2">
              <Label for="firstName">First Name</Label>
              <Input
                  id="firstName"
                  type="text"
                  required
                  :tabindex="1"
                  v-model="firstName"
              />
              <ErrorMessage :message="errorsObject.firstName"/>
            </div>
            <div class="grid gap-2">
              <Label for="surname">Surname</Label>
              <Input
                  id="surname"
                  type="text"
                  required
                  :tabindex="2"
                  v-model="surname"
              />
              <ErrorMessage :message="errorsObject.surname"/>
            </div>
            <div class="grid gap-2">
              <Label for="email">Email</Label>
              <Input
                  id="email"
                  type="text"
                  required
                  :tabindex="3"
                  v-model="email"
              />
              <ErrorMessage :message="errorsObject.email"/>
            </div>
            <div class="grid gap-2">
              <Label for="password">Password</Label>
              <Input
                  id="surname"
                  type="password"
                  required
                  :tabindex="1"
                  v-model="password"
              />
              <ErrorMessage :message="errorsObject.password"/>
            </div>

            <div class="grid gap-2">
              <Label for="passwordConfirmation">Password Confirmation</Label>
              <Input
                  id="surname"
                  type="password"
                  required
                  :tabindex="1"
                  v-model="passwordConfirmation"
              />
              <ErrorMessage :message="errorsObject.passwordConfirmation"/>
            </div>

             <ErrorMessage :message="errorMessage ?? ''" />

            <Button type="submit" :disabled="isLoading">
              Complete Registration
              <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />
            </Button>
        </form>
        </CardContent>
      </Card>
</template>
