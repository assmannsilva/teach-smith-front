<script setup lang="ts">
import { useUploadInvitesFile } from '@/composables/useUploadInvitesFile';
import { ref, nextTick } from 'vue';
import Card from '@/components/ui/card/Card.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import CardTitle from '@/components/ui/card/CardTitle.vue'
import CardContent from '@/components/ui/card/CardContent.vue'
import { Loader2 } from 'lucide-vue-next';
import Button from '../ui/button/Button.vue';
import Input from '../ui/input/Input.vue';
import Label from '../ui/label/Label.vue';

const isLoading = ref(false)

</script>

<template>
   <Card class="rounded-xl">
        <CardHeader class="px-10 pb-0 pt-8 text-center">
          <CardTitle class="text-xl">Invite Single Student</CardTitle>
        </CardHeader>
        <CardContent class="px-10 py-8">
          <form class="flex flex-col gap-6" @submit.prevent="">
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


            <Button type="submit" :disabled="isLoading || !importFile">
              Import File
              <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />
            </Button>
          </form>
        </CardContent>
      </Card>
</template>