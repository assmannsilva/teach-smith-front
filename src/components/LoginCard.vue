<script setup lang="ts">

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Card from '@/components/ui/card/Card.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import CardTitle from '@/components/ui/card/CardTitle.vue'
import CardContent from '@/components/ui/card/CardContent.vue'
import { Loader2 } from 'lucide-vue-next'

import { useLogin } from '@/composables/useLogin'
import Label from './ui/label/Label.vue'
import ErrorMessage from './ui/Error.vue'

const { email, password, errorMessage, isLoading, submitLogin } = useLogin()
</script>

<template>
    <Card class="rounded-xl">
        <CardHeader class="px-10 pb-0 pt-8 text-center">
          <CardTitle class="text-xl">Login</CardTitle>
        </CardHeader>
        <CardContent class="px-10 py-8">
          <form @submit.prevent="submitLogin" class="flex flex-col gap-6">
            <div class="grid gap-2">
              <Label for="email">Email</Label>
              <Input
                  id="email"
                  type="email"
                  required
                  autofocus
                  :tabindex="1"
                  autocomplete="email"
                  v-model="email"
              />
            </div>
            <div class="grid gap-2">
                <div class="flex items-center justify-between">
                  <Label for="password">Senha</Label>  
                </div>
                <Input
                    id="password"
                    type="password"
                    required
                    :tabindex="2"
                    autocomplete="current-password"
                    v-model="password"
                />
            </div>

            <ErrorMessage :message="errorMessage ?? ''" />
            

            <Button type="submit" :disabled="isLoading">
              Login
              <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />
            </Button>
        </form>
        </CardContent>
      </Card>
</template>
