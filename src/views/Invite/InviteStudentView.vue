<script setup lang="ts">
import FileUploadCard from '@/components/invite/FileUploadCard.vue';
import InviteStudentCard from '@/components/invite/InviteStudentCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
  <MainLayout>
      <div class="grid grid-cols-2 gap-6">
        <div>
          <FileUploadCard type="student"/>
        </div>
        <InviteStudentCard />
      </div>
  </MainLayout>
</template>