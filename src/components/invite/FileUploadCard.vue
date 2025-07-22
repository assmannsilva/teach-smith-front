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
import ErrorMessage from '../ui/Error.vue';

const isLoading = ref(false)
const { errors, status, dispatchedCount, importFile, inviteMultipleStudents  } = useUploadInvitesFile()

const props = defineProps<{
  type: 'student' | 'teacher'
}>()

function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  importFile.value = target.files?.[0] || null;
}

async function handleClick() {
  isLoading.value = true;
  try {
    await inviteMultipleStudents();
    importFile.value = null;
  } 
  finally {
    isLoading.value = false;
  }
}

</script>

<template>
   <Card class="rounded-xl">
        <CardHeader class="px-10 pb-0 pt-8 text-center">
          <CardTitle class="text-xl">Dispatch Invites</CardTitle>
        </CardHeader>
        <CardContent class="px-10 py-8">
          <form class="flex flex-col gap-6" @submit.prevent="handleClick">
            <div class="grid gap-2">
                <div class="flex items-center justify-between">
                  <Label for="importFile">CSV File</Label>
                </div>
                <Input
                    id="importFile"
                    type="file"
                    required
                    :tabindex="2"
                    accept=".csv, .xls, .xlsx"
                    @change="onFileChange"
                />
            </div>
            <div v-if="errors?.length" class="bg-red-50 border border-red-300 text-red-700 rounded p-4 my-4">
              <ul>
                <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
              </ul>
            </div>

            <Button type="submit" :disabled="isLoading || !importFile">
              Import File
              <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />
            </Button>
          </form>
        </CardContent>
      </Card>
</template>